import type { ThematicPageData } from "../../types/thematic";

export const uaeUtilities: ThematicPageData = {
  slug: "utilities",
  theme: "utilities",
  countryKey: "uae",
  countrySlug: "uae",
  countryName: "UAE",
  title: "Utilities in the UAE: DEWA, ADDC, Electricity & Water Costs",
  description:
    "Guide to utility costs and registration in the UAE for expats. Covers DEWA (Dubai), ADDC (Abu Dhabi), electricity tariffs, water bills, gas, and district cooling.",
  intro: `Utilities in the UAE — electricity, water, gas, and district cooling — are managed by government-owned entities, with costs that vary between emirates and by usage tier. In Dubai, the Dubai Electricity and Water Authority (DEWA) is the sole provider. In Abu Dhabi, the Abu Dhabi Distribution Company (ADDC) handles electricity and water distribution. Sharjah has SEWA (Sharjah Electricity, Water and Gas Authority), and the Northern Emirates have their own utility providers. For expats, understanding the registration process, tariff structures, and average monthly costs is important for budgeting accurately.

Electricity in the UAE is predominantly generated from natural gas, with an increasing share coming from solar (Mohammed bin Rashid Al Maktoum Solar Park, the world's largest single-site solar park, in Dubai) and nuclear energy (Barakah Nuclear Power Plant in Abu Dhabi). Tariffs for expats are significantly higher than for UAE nationals — in Dubai, expats pay AED 0.38 (~€0.10) per kilowatt-hour (kWh) for usage up to 2,000 kWh and AED 0.44 (~€0.11) for usage above that, compared to AED 0.23 (~€0.06) for citizens in the lowest tier. Water tariffs follow a similar pattern, with expats paying AED 10.65 (~€2.66) per 1,000 imperial gallons (up to 6,000 gallons) and higher rates for excess usage. The average monthly utility bill for an expat household in a two-bedroom apartment ranges from AED 500 (~€125) to AED 1,200 (~€300), depending on usage and season — bills spike dramatically during summer (June–September) when air conditioning runs continuously.

District cooling is an important cost consideration in many newer Dubai developments. Unlike buildings with individual AC units charged through DEWA, district-cooling buildings receive chilled water from a central plant, and the cost appears as a separate charge on top of the DEWA bill. District-cooling providers include Empower and Emicool in Dubai, and Tabreed in Abu Dhabi. Charges are based on consumption (measured in ton-hours) with a minimum monthly fee, and can range from AED 200/month (~€50/month) in winter to AED 1,000+/month (~€250+/month) in summer for a two-bedroom apartment. Tenants should always check whether a property is on district cooling before signing a lease, as this cost is not always included in DEWA bills.`,
  citySections: [
    {
      city: "Dubai",
      slug: "dubai",
      content: `In Dubai, all electricity and water services are provided by DEWA (Dubai Electricity and Water Authority). To set up a new DEWA account, you need your Ejari (registered tenancy contract), passport with visa, and Emirates ID. Registration can be done online through the DEWA app or website, or at a DEWA customer service centre. A refundable security deposit is required: AED 2,000 (~€500) for apartments and AED 4,000 (~€1,000) for villas. The activation fee is AED 100 (~€25) (for existing connections) or AED 300 (~€75) (for new connections), and processing typically takes 1–2 working days. DEWA's smart meters enable real-time usage tracking through the DEWA app, allowing residents to monitor consumption and manage costs proactively.

DEWA's tariff structure for expat residents (non-nationals) is as follows. Electricity: AED 0.23/kWh (~€0.06/kWh) for the first 2,000 kWh, AED 0.28/kWh (~€0.07/kWh) for 2,001–4,000 kWh, AED 0.32/kWh (~€0.08/kWh) for 4,001–6,000 kWh, and AED 0.38/kWh (~€0.10/kWh) above 6,000 kWh. A fuel surcharge of AED 0.065/kWh (~€0.016/kWh) applies to all consumption. Water: AED 4.49 (~€1.12) per 1,000 imperial gallons for the first 6,000 gallons, AED 5.48 (~€1.37) for 6,001–12,000 gallons, AED 6.02 (~€1.51) for 12,001–20,000 gallons, and AED 10.65 (~€2.66) above 20,000 gallons. A sewerage charge of 5% of the total DEWA bill is also applied. Additionally, all tenants in Dubai pay a housing fee of 5% of the annual rent, split into 12 monthly instalments added to the DEWA bill. For a typical two-bedroom apartment, expect monthly DEWA bills of AED 500–800 (~€125–200) in winter and AED 800–1,500 (~€200–375) in summer.

For properties on district cooling, the separate chiller charges can be substantial. Empower, Dubai's largest district-cooling provider, uses a tariff of approximately AED 0.169 (~€0.04) per ton-hour of cooling consumed, plus a demand charge based on the connected capacity. Monthly charges for a two-bedroom apartment on district cooling typically range from AED 200–400 (~€50–100) in cooler months to AED 800–1,200 (~€200–300) in peak summer. Some newer developments include a fixed chiller allowance in the service charge, which simplifies budgeting. Gas supply for cooking is provided via piped natural gas in most modern buildings (charged by DEWA at AED 3.50 (~€0.88) per therm) or bottled gas cylinders (AED 30 (~€7.50) per 25-kg cylinder) in older or villa properties. DEWA bills can be paid online, through the app, at payment kiosks, or via auto-debit from your bank account.`,
    },
    {
      city: "Abu Dhabi",
      slug: "abu-dhabi",
      content: `In Abu Dhabi, electricity and water are distributed by the Abu Dhabi Distribution Company (ADDC) for the city of Abu Dhabi and the Western Region, and by Al Ain Distribution Company (AADC) for the Al Ain area. To set up an ADDC account, you need a Tawtheeq tenancy contract, passport, Emirates ID, and a security deposit of AED 2,000 (~€500) for apartments or AED 4,000 (~€1,000) for villas (refundable upon final disconnection). Registration can be completed through the ADDC website, mobile app, or at a customer service centre. Activation usually takes 1–3 working days.

ADDC's tariff structure differs from DEWA's and is generally slightly lower. For expat residents, electricity is charged at a flat rate of approximately AED 0.30/kWh (~€0.08/kWh), with an additional fuel surcharge. Water is charged at approximately AED 10.40 (~€2.60) per 1,000 imperial gallons. A sewerage fee of AED 0.05 (~€0.01)/imperial gallon also applies. Unlike Dubai, Abu Dhabi does not levy a municipal housing fee through the utility bill — instead, the municipality fee is incorporated into the Tawtheeq registration or applied differently. The average monthly ADDC bill for a two-bedroom apartment in Abu Dhabi ranges from AED 400–700 (~€100–175) in winter to AED 700–1,300 (~€175–325) in summer. Villas tend to be more expensive, with bills of AED 1,000–2,500/month (~€250–625/month) in summer due to larger areas requiring cooling.

District cooling is prevalent in Abu Dhabi's newer island developments such as Al Reem Island, Saadiyat Island, and Al Maryah Island. Tabreed is the primary district-cooling provider in the emirate. Charges are usage-based, measured in ton-hours, with rates similar to Dubai's Empower. For budget management, ADDC offers prepaid electricity meters in some properties, allowing tenants to top up credit as needed — this can help avoid large surprise bills. The ADDC app provides billing history, consumption analytics, and the ability to report faults or outages. Abu Dhabi has also introduced the Tarsheed programme, a conservation initiative offering energy-efficiency tips and subsidised smart thermostats to help residents reduce consumption, which can lower bills by 10–20%.`,
    },
  ],
  faqs: [
    {
      question: "How much are average utility bills in the UAE?",
      answer:
        "For a two-bedroom apartment, expect AED 500–800/month (~€125–200/month) in winter and AED 800–1,500/month (~€200–375/month) in summer from DEWA (Dubai) or ADDC (Abu Dhabi). Villas cost significantly more: AED 1,000–3,000/month (~€250–750/month). These figures cover electricity, water, and sewerage but exclude district cooling (add AED 200–1,200/month / ~€50–300/month) and the 5% Dubai housing fee.",
    },
    {
      question: "What is the DEWA security deposit and is it refundable?",
      answer:
        "DEWA requires a refundable security deposit of AED 2,000 (~€500) for apartments and AED 4,000 (~€1,000) for villas. The deposit is returned upon final account disconnection, minus any outstanding charges. A similar deposit is required by ADDC in Abu Dhabi. Some landlords include the deposit in the tenancy agreement and handle it on behalf of the tenant.",
    },
    {
      question: "Why is my Dubai utility bill so high?",
      answer:
        "Common reasons include: summer AC usage (which can triple electricity consumption), district-cooling charges appearing as a separate bill, the 5% housing fee added to DEWA bills, water-heater usage, and an older or poorly insulated property. Check your DEWA app for consumption breakdowns and compare against the average for your property type. Setting AC to 24°C instead of 20°C can reduce cooling costs by 20–30%.",
    },
    {
      question: "What is district cooling and how is it different from regular AC?",
      answer:
        "District cooling uses a centralised plant to produce chilled water, which is piped to individual buildings for air conditioning. It is more energy-efficient than individual AC units at scale but is billed separately from DEWA/ADDC — through providers like Empower, Emicool, or Tabreed. Costs depend on usage (measured in ton-hours) and can be AED 200–1,200/month (~€50–300/month). Always ask whether a property uses district cooling before renting.",
    },
    {
      question: "How do I register for DEWA or ADDC?",
      answer:
        "For DEWA (Dubai): register online at dewa.gov.ae or via the DEWA app with your Ejari certificate, passport, visa, and Emirates ID. Pay the AED 2,000 (~€500) deposit and AED 100 (~€25) activation fee. For ADDC (Abu Dhabi): apply through addc.ae or the ADDC app with your Tawtheeq contract, passport, and Emirates ID. Pay the AED 2,000 (~€500) deposit. Both processes take 1–3 working days.",
    },
  ],
  sources: [
    {
      name: "DEWA — Dubai Electricity and Water Authority",
      url: "https://www.dewa.gov.ae",
    },
    {
      name: "ADDC — Abu Dhabi Distribution Company",
      url: "https://www.addc.ae",
    },
    {
      name: "Empower — Emirates Central Cooling Systems",
      url: "https://www.empower.ae",
    },
  ],
  relatedLinks: [
    { label: "UAE Expat Guide", href: "/uae/guide/" },
    { label: "Cost of Living in the UAE", href: "/uae/cost-of-living/" },
    { label: "Living in Dubai", href: "/uae/dubai/" },
    { label: "Living in Abu Dhabi", href: "/uae/abu-dhabi/" },
    { label: "Housing in the UAE", href: "/uae/housing/" },
    { label: "Telecom in the UAE", href: "/uae/telecom/" },
    { label: "Utilities in Qatar", href: "/qatar/utilities/" },
    { label: "Utilities in Saudi Arabia", href: "/saudi-arabia/utilities/" },
  ],
  calculator: "utilities",
};
