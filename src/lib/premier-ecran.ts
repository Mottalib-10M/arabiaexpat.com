/**
 * Premier écran (RECETTE-SITE.md §5, règle du 2026-10-11) : le simulateur se voit sans défiler.
 *
 * Les gabarits rendent leur contenu en HTML puis placent ce qui précédait le simulateur
 * (paragraphe citable, liens croisés) juste après lui. Le bloc principal est marqué `data-simu`
 * dans la page ; on cherche la fin de ce bloc en comptant les balises <div>.
 */

/** Indice juste après la balise fermante du premier élément `data-simu`, ou -1. */
export function finDuSimulateur(html: string): number {
  const m = /<div\b[^>]*\sdata-simu\b[^>]*>/.exec(html);
  if (!m) return -1;
  const re = /<div\b[^>]*>|<\/div>/g;
  re.lastIndex = m.index + m[0].length;
  let profondeur = 1;
  let t: RegExpExecArray | null;
  while ((t = re.exec(html))) {
    profondeur += t[0].startsWith("</") ? -1 : 1;
    if (profondeur === 0) return t.index + t[0].length;
  }
  return -1;
}

/** Insère `bloc` juste après le simulateur principal ; sans simulateur, juste après le H1 ; sinon en tête. */
export function apresSimulateur(html: string, bloc: string): string {
  if (!bloc) return html;
  let i = finDuSimulateur(html);
  if (i < 0) {
    const h = html.indexOf("</h1>");
    i = h < 0 ? 0 : h + 5;
  }
  return html.slice(0, i) + bloc + html.slice(i);
}

/** Insère `bloc` juste après le premier H1 (simulateur d'un gabarit placé sous le titre). */
export function apresTitre(html: string, bloc: string): string {
  const h = html.indexOf("</h1>");
  if (h < 0) return bloc + html;
  return html.slice(0, h + 5) + bloc + html.slice(h + 5);
}
