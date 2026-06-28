import type { ThematicPageData } from "../../types/thematic";

export const qatarTransport: ThematicPageData = {
  slug: "transport",
  theme: "transport",
  countryKey: "qatar",
  countrySlug: "qatar",
  countryName: "Qatar",
  title: "Transport in Qatar: Metro, Buses, Taxis & Driving Guide",
  description:
    "Navigate Qatar's transport system with this expat guide. Covers the Doha Metro (Red, Green, Gold lines), Karwa buses and taxis, Uber, Lusail Tram, car ownership, fuel prices, and driving licence conversion.",
  intro: `Qatar's transport infrastructure has been transformed in the past decade, with the opening of the Doha Metro in 2019 marking a pivotal shift from a car-dependent country to one with modern public transit. The metro system, combined with Karwa bus services, taxis, and ride-hailing apps, gives expats multiple options for getting around. However, private car ownership remains the dominant mode of transport, particularly for families and those living outside central Doha.

The Doha Metro is operated by Qatar Rail and consists of three lines: the Red Line (running north-south from Lusail to Al Wakra via West Bay and Msheireb), the Green Line (running east-west from Al Riffa to Al Mansoura via Education City and Msheireb), and the Gold Line (connecting Ras Bu Abboud to Al Aziziyah via Msheireb and the National Museum). Msheireb station serves as the central interchange where all three lines converge. Fares are affordable, starting at QAR 2 for a standard single journey and QAR 10 for a day pass. A rechargeable travel card is available for regular commuters.

For those who prefer driving, Qatar has well-maintained roads and highways. Fuel is inexpensive by global standards, with petrol priced at approximately QAR 1.75-2.10 per litre. The country drives on the right-hand side, and expats can convert their home-country driving licence to a Qatari licence relatively easily if their country is on the approved list. Car insurance is mandatory, and annual vehicle registration (istimara) is handled by the Ministry of Interior.`,
  citySections: [
    {
      city: "Doha",
      slug: "doha",
      content: `Doha's transport network centres around the metro system, which has made a significant impact on daily commuting since its launch. The Red Line is the most heavily used route, connecting Lusail in the north to Al Wakra in the south, passing through West Bay (the business district), Msheireb (the main interchange), and Hamad International Airport. The Green Line serves Education City, Al Gharrafa, and the western suburbs, while the Gold Line provides access to the National Museum of Qatar and the southern industrial and residential areas. Trains run every 3-6 minutes during peak hours and 6-12 minutes off-peak, with operating hours from around 5:30 AM to 11:30 PM (extended to 1:00 AM on Fridays).

The Lusail Tram is a separate light rail network serving the new Lusail City development north of Doha. It connects residential areas, commercial districts, and the Lusail Stadium with four lines and over 25 stations. The tram integrates with the Doha Metro at Lusail and Legtaifiya stations, making it convenient for residents of Lusail to commute into central Doha.

Karwa, operated by Mowasalat, is Qatar's official bus and taxi service. The bus network covers most of greater Doha with over 80 routes, and fares start at QAR 3 per ride. Karwa taxis are recognisable by their turquoise colour and charge a starting fare of QAR 10 plus QAR 1.60 per kilometre. All taxis are metered. For ride-hailing, Uber and Careem both operate in Doha, and Karwa also has its own app for booking taxis. Ride-hailing tends to be slightly more expensive than street hailing but offers cashless payment and trip tracking.

Parking in Doha can be challenging, particularly in West Bay and the Souq Waqif area. Street parking is metered in many central locations (QAR 2-3 per hour), and parking violations are actively enforced. Most shopping malls and residential buildings provide free or subsidised parking. The Ministry of Interior has implemented a traffic points system; accumulating 14 points within a year results in licence suspension.

Car ownership is straightforward in Qatar. New and used vehicles are available from dealerships across the city. Popular choices among expats include Toyota Land Cruiser, Nissan Patrol, and various Japanese and Korean sedans. Annual registration renewal costs around QAR 100-300 depending on the vehicle type, and comprehensive insurance typically costs QAR 1,500-4,000 per year. Petrol prices remain among the lowest in the world, with a full tank costing around QAR 80-150 for a standard sedan.

To convert a foreign driving licence, expats must visit the Traffic Department with their QID, current valid licence, an eye test certificate, and passport-size photos. Citizens of around 50 countries can convert directly without a driving test. Others must take a short road test. International driving permits are valid for short-term visitors but not for residents. Driving in Qatar is generally safe, though speed and tailgating on highways remain common concerns for newcomers.`,
    },
  ],
  faqs: [
    {
      question: "How much does the Doha Metro cost?",
      answer:
        "The Doha Metro is very affordable. A standard single journey costs QAR 2, a day pass costs QAR 10, and a rechargeable travel card can be loaded with credit for regular use. Gold Class carriages (first class, with quieter and more spacious seating) are available for QAR 10 per journey. Monthly passes are also available. Children under 6 ride free, and people of determination travel at no charge.",
    },
    {
      question: "Can I use Uber in Qatar?",
      answer:
        "Yes, Uber operates in Doha and across Qatar. Careem, which is owned by Uber, also operates in the country. Both apps offer standard and premium vehicle categories and support cashless payment. In addition, the official Karwa app allows you to book metered taxis digitally. Ride-hailing is widely used and generally safe, though surge pricing may apply during peak hours.",
    },
    {
      question: "How do I convert my driving licence to a Qatar licence?",
      answer:
        "Visit the Traffic Department of the Ministry of Interior with your QID, valid foreign driving licence, an eye test certificate from an approved clinic, passport-size photographs, and a NOC from your employer. Citizens of approved countries (including most Western, GCC, and many Asian nations) can convert directly without a driving test. Others must pass a short road test. The licence is valid for five years and costs approximately QAR 250.",
    },
    {
      question: "Is car insurance mandatory in Qatar?",
      answer:
        "Yes, third-party liability car insurance is mandatory under Qatari law. You cannot register or renew a vehicle without valid insurance. Most expats opt for comprehensive insurance, which covers both third-party liability and damage to your own vehicle. Annual premiums for comprehensive cover range from QAR 1,500 to QAR 4,000 depending on the vehicle value, driver history, and coverage options. Insurance can be purchased from local providers or through comparison websites.",
    },
    {
      question: "How does the Lusail Tram connect to the Doha Metro?",
      answer:
        "The Lusail Tram integrates with the Doha Metro at Lusail QNB station and Legtaifiya station, both on the Red Line. Passengers can transfer between the two systems using the same travel card. The tram serves Lusail City's residential districts, Marina District, Fox Hills, and the stadium precinct. Combined journey fares are calculated based on the total distance travelled across both systems.",
    },
  ],
  sources: [
    {
      name: "Qatar Rail (Doha Metro & Lusail Tram)",
      url: "https://www.qr.com.qa/",
    },
    {
      name: "Mowasalat (Karwa) - Qatar Transport Company",
      url: "https://www.mowasalat.com/",
    },
    {
      name: "Ministry of Interior - Traffic Department",
      url: "https://portal.moi.gov.qa/",
    },
  ],
  relatedLinks: [
    { label: "Qatar Expat Guide", href: "/qatar/guide/" },
    { label: "Cost of Living in Qatar", href: "/qatar/cost-of-living/" },
    { label: "Living in Doha", href: "/qatar/doha/" },
    { label: "Housing in Qatar", href: "/qatar/housing/" },
    { label: "Utilities in Qatar", href: "/qatar/utilities/" },
    { label: "Transport in the UAE", href: "/uae/transport/" },
    {
      label: "Transport in Saudi Arabia",
      href: "/saudi-arabia/transport/",
    },
  ],
  calculator: "transport",
};
