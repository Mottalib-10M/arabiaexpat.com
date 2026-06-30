#!/usr/bin/env bash
# Pre-build validation checks for arabiaexpat.com
set -euo pipefail

ERRORS=0

echo "=== Pre-build Checks ==="

# 1. Node version check (need >= 22 for Astro 5+)
NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt 22 ]; then
  echo "FAIL: Node.js >= 22 required (found v$(node -v))"
  ERRORS=$((ERRORS + 1))
else
  echo "OK: Node.js v$(node -v)"
fi

# 2. No client:load in pages
LOAD_COUNT=$(grep -r "client:load" src/pages/ --include="*.astro" -c 2>/dev/null || echo 0)
if [ "$LOAD_COUNT" -gt 0 ]; then
  echo "FAIL: Found $LOAD_COUNT files with client:load (should use client:idle)"
  grep -r "client:load" src/pages/ --include="*.astro" -l
  ERRORS=$((ERRORS + 1))
else
  echo "OK: No client:load in pages"
fi

# 3. No placeholder verification codes (arabiaexpat uses site-config.ts only)
PLACEHOLDER_COUNT=$(grep -r "XXXX\|placeholder\|YOUR_.*_HERE" src/data/site-config.ts 2>/dev/null | grep -v "^Binary" | wc -l || echo 0)
if [ "$PLACEHOLDER_COUNT" -gt 0 ]; then
  echo "WARN: Found placeholder values in config"
  ERRORS=$((ERRORS + 1))
else
  echo "OK: No placeholders in config"
fi

# 4. Em dashes check (should be < 5)
EM_COUNT=$(grep -r "—" src/pages/ --include="*.astro" -c 2>/dev/null | awk -F: '{sum+=$2} END {print sum+0}')
if [ "$EM_COUNT" -gt 5 ]; then
  echo "WARN: Found $EM_COUNT em dashes in pages (target: < 5)"
else
  echo "OK: Em dashes under control ($EM_COUNT)"
fi

# 5. Build test
echo "Running build..."
npx astro build 2>&1 | tail -5
BUILD_EXIT=${PIPESTATUS[0]}
if [ $BUILD_EXIT -ne 0 ]; then
  echo "FAIL: Build failed!"
  ERRORS=$((ERRORS + 1))
else
  echo "OK: Build successful"
fi

echo ""
if [ $ERRORS -gt 0 ]; then
  echo "=== $ERRORS issue(s) found ==="
  exit 1
else
  echo "=== All checks passed ==="
  exit 0
fi
