/**
 * Citable paragraph for a corridor page (RECETTE §21).
 *
 * The fifty-six corridor pages opened with a heading and two short lines: nothing
 * an answer engine could lift. This paragraph is built from the corridor and city
 * data already on the page, so it differs from one page to the next and can be
 * checked against the page itself, and it clears the 120-word floor.
 */
interface Corridor {
  country: string;
  demonym: string;
  avgSalaryRange: string;
  documentsNeeded: string[];
  popularDestinations: string[];
}
interface City {
  name: string;
  currency: string;
}

const CONTEXTE_VILLE: Record<string, string> = {
  Dubai:
    "Dubai is the Gulf city with the largest expatriate share of its population, which means an arrival rarely has to build a community from nothing, and it is also the most expensive of the six on housing",
  "Abu Dhabi":
    "Abu Dhabi pays comparable salaries to Dubai in the public and energy sectors while charging noticeably less for housing, and its rent cap regime has historically made increases more predictable",
  Doha:
    "Doha concentrates most of Qatar's employment in a small area, so commuting times are short, and the end of the kafala sponsorship transfer requirement has made changing employer materially easier than it was",
  Riyadh:
    "Riyadh is where the Saudi regional headquarters programme has pushed multinational employers to move their Gulf head offices, which has increased senior vacancies faster than housing supply",
  Jeddah:
    "Jeddah offers lower housing costs than Riyadh and a longer-established expatriate presence through the Red Sea trade, with a noticeably less formal working culture",
  Dammam:
    "Dammam and the wider Eastern Province are dominated by the energy sector, where compound housing provided by the employer is still common and changes the cost calculation entirely",
};

export function resumeCorridor(corridor: Corridor, city: City): string {
  const contexte = CONTEXTE_VILLE[city.name] ?? `${city.name} is one of the six Gulf cities covered here`;
  return (
    `A ${corridor.demonym} professional moving from ${corridor.country} to ${city.name} is joining the ` +
    `most travelled kind of route into the Gulf, and the financial case rests on two facts rather than ` +
    `one: salaries quoted for equivalent roles run at ${corridor.avgSalaryRange}, and there is no personal ` +
    `income tax on employment income, so the figure in the offer letter is close to what reaches the ` +
    `account. ${contexte}. Salaries are quoted in ${city.currency} and normally as a package that ` +
    `bundles base pay with housing and transport allowances, which is why comparing two offers means ` +
    `separating those components first. Before departure the binding constraint is paperwork rather than ` +
    `money: ${corridor.documentsNeeded.length} documents are required, and the attestation chain for ` +
    `educational certificates is the step that most often delays an arrival by several weeks.`
  );
}

/**
 * Second paragraph, on what happens at the other end: the exit side of a Gulf
 * posting is what most arrival guides leave out, and it differs by country of
 * destination rather than by city.
 */
export function sortieCorridor(corridor: Corridor, city: City, paysDestination: string): string {
  const gratuite =
    paysDestination === "Saudi Arabia"
      ? "In Saudi Arabia the end-of-service award is half a month of pay for each of the first five years and a full month for each year after that, and social insurance contributions to GOSI are deducted from salary, which is the one Gulf country where a payslip deduction applies"
      : paysDestination === "Qatar"
        ? "In Qatar the end-of-service gratuity is at least three weeks of basic pay for each year of service, payable after one complete year, and there is no social insurance deduction for expatriate employees"
        : "In the United Arab Emirates the end-of-service gratuity is twenty-one days of basic pay for each of the first five years and thirty days for each year beyond, computed on basic pay alone and not on the total package";
  return (
    `${gratuite}. That distinction matters to a ${corridor.demonym} employee because the gratuity is ` +
    `calculated on basic pay rather than on the package, so an offer that loads value into allowances ` +
    `produces a smaller exit payment for the same headline figure. Two other items belong in the same ` +
    `calculation. A dependent visa requires the sponsor to meet a minimum salary threshold, which is why ` +
    `family relocation is usually a mid-career rather than an entry-level decision. And remittance costs ` +
    `to ${corridor.country} vary by several percentage points between exchange houses and banks, which on ` +
    `a monthly transfer over a few years is worth more than most salary negotiations.`
  );
}

/**
 * Citable paragraph for a country-and-theme page (RECETTE §21).
 *
 * The twenty-four thematic pages opened with a heading and a short intro. This
 * paragraph is built from the page's own data, the theme, the country, the cities
 * covered and the number of sources cited, so no two pages produce the same text.
 */
interface ThematicLike {
  theme: string;
  countryName: string;
  citySections: { city: string }[];
  faqs: unknown[];
  sources: unknown[];
}

const CADRE_THEME: Record<string, string> = {
  education:
    "School fees are the largest single expense for a relocating family after housing, they are set per school rather than by regulation, and a place has to be secured before a dependent visa application is worth starting",
  healthcare:
    "Health insurance is compulsory and employer-provided for the employee, but the cover for dependants is frequently not included, which is the gap that surprises families after arrival",
  housing:
    "Rent is normally paid in a small number of large cheques rather than monthly, which makes the first year's cash requirement the real constraint rather than the annual figure",
  transport:
    "Distances make a car close to compulsory outside the metro corridors, and the total cost of running one, finance, insurance, fuel and fines, is usually underestimated in a relocation budget",
  banking:
    "Opening an account requires a residence visa and an Emirates or national identity card, so the first weeks are spent on an employer-facilitated salary account rather than on a chosen bank",
  visa:
    "The residence visa is tied to the employer, and the rules on changing employer, on grace periods after a resignation and on dependent sponsorship are what determine how much freedom a posting actually offers",
  telecom:
    "A local number is needed before almost anything else, since banking, government services and delivery all authenticate by SMS, and a postpaid plan requires the residence visa that has not yet been issued",
  utilities:
    "Utility connection requires a tenancy contract registered with the authority, a deposit, and in some emirates a municipality fee charged as a percentage of the annual rent through the electricity bill",
};

export function resumeThematique(page: ThematicLike): string {
  const villes = page.citySections.map((s) => s.city);
  const liste =
    villes.length > 1
      ? `${villes.slice(0, -1).join(", ")} and ${villes[villes.length - 1]}`
      : villes[0] ?? page.countryName;
  const cadre =
    CADRE_THEME[page.theme] ??
    `This page covers ${page.theme} in ${page.countryName} city by city rather than as a national average`;
  return (
    `${cadre}. This page sets out how ${page.theme} works in ${page.countryName}, city by city rather ` +
    `than as a national average, because the figures diverge enough between ${liste} that a single ` +
    `country-level number would mislead a household planning a move. It answers ${page.faqs.length} ` +
    `questions that recur for arriving expatriates and cites ${page.sources.length} official or ` +
    `institutional sources, each named with its publisher so that any figure can be checked at origin ` +
    `rather than taken on trust. What it does not do is quote a price that will hold: in ${page.countryName} ` +
    `the tariffs and fees behind these figures are revised on their own schedule, and the date of the ` +
    `last verification appears on the page for that reason.`
  );
}

/**
 * Citable paragraph for a corridor index page (RECETTE §21).
 *
 * The eight origin-country pages opened with a heading and a line. This paragraph
 * is built from that country's own data, so no two are alike.
 */
interface CorridorIndex {
  country: string;
  demonym: string;
  avgSalaryRange: string;
  popularDestinations: string[];
  documentsNeeded: string[];
  communityResources: string[];
}

export function resumeCorridorIndex(c: CorridorIndex): string {
  const dest = c.popularDestinations.length;
  return (
    `This page covers what a ${c.demonym} professional needs to settle before leaving for the Gulf, and ` +
    `it treats the paperwork rather than the destination as the binding constraint, because that is what ` +
    `delays arrivals. The financial case is straightforward: salaries for equivalent roles run at ` +
    `${c.avgSalaryRange}, and there is no personal income tax on employment income in any of the ` +
    `${dest} destination markets listed here, so the figure in an offer letter is close to what reaches ` +
    `the account. What is not straightforward is the sequence before departure. ` +
    `${c.documentsNeeded.length} documents are required, and the attestation chain for educational ` +
    `certificates has to pass through the issuing authority, the foreign ministry and then the ` +
    `destination embassy, which takes weeks rather than days and cannot be started after a start date ` +
    `has been agreed. On arrival, ${c.communityResources.length} community organisations and official ` +
    `channels exist for ${c.demonym} nationals, and the embassy complaint mechanism is the one worth ` +
    `noting before it is needed.`
  );
}
