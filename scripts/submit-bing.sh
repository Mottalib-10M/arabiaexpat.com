#!/usr/bin/env bash
# Submit URLs to Bing IndexNow/URL Submission API
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
[ -f "$SCRIPT_DIR/.env" ] && source "$SCRIPT_DIR/.env"

DOMAIN="https://arabiaexpat.com"
SITEMAP_URL="$DOMAIN/sitemap-index.xml"
INDEXNOW_KEY="434f8e28e564afd75ff290e234154507"
API_KEY="${BING_API_KEY:?Set BING_API_KEY environment variable}"

echo "Fetching sitemap from $SITEMAP_URL..."
SITEMAPS=$(curl -s "$SITEMAP_URL" | grep -oP '<loc>\K[^<]+')

ALL_URLS=""
for SITEMAP in $SITEMAPS; do
  PAGES=$(curl -s "$SITEMAP" | grep -oP '<loc>\K[^<]+')
  ALL_URLS="$ALL_URLS
$PAGES"
done

# Remove leading blank line
ALL_URLS=$(echo "$ALL_URLS" | sed '/^$/d')
TOTAL=$(echo "$ALL_URLS" | wc -l | tr -d ' ')
echo "Found $TOTAL URLs across all sitemaps."

# Submit first 100 URLs via IndexNow
COUNT=0
for URL in $ALL_URLS; do
  if [ $COUNT -ge 100 ]; then break; fi
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
    "https://www.bing.com/indexnow?url=$URL&key=$INDEXNOW_KEY")
  echo "  [$STATUS] $URL"
  COUNT=$((COUNT + 1))
done

echo ""
echo "Submitted $COUNT URLs to Bing via IndexNow."

# Also submit via URL Submission API (batch)
BATCH=$(echo "$ALL_URLS" | head -100)
JSON=$(echo "$BATCH" | jq -R -s -c "{siteUrl: \"$DOMAIN\", urlList: split(\"\\n\") | map(select(length > 0))}")

RESPONSE=$(curl -s -X POST \
  "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=$API_KEY" \
  -H "Content-Type: application/json" \
  -d "$JSON" \
  -w "\nHTTP_STATUS:%{http_code}")

HTTP_CODE=$(echo "$RESPONSE" | grep -o 'HTTP_STATUS:[0-9]*' | cut -d: -f2)
BODY=$(echo "$RESPONSE" | sed '/HTTP_STATUS/d')

if [ "$HTTP_CODE" = "200" ]; then
  echo "URL Submission API: $COUNT URLs submitted successfully."
else
  echo "URL Submission API error (HTTP $HTTP_CODE): $BODY"
fi
