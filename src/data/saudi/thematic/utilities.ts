import type { ThematicPageData } from "../../types/thematic";

export const saudiUtilities: ThematicPageData = {
  slug: "utilities",
  theme: "utilities",
  countryKey: "saudi",
  countrySlug: "saudi-arabia",
  countryName: "Saudi Arabia",
  title: "Utilities in Saudi Arabia: Electricity, Water & Expat Guide",
  description:
    "Everything expats need to know about utilities in Saudi Arabia, including SEC electricity tariffs, NWC water costs, government subsidies, smart meters, and city-specific information for Riyadh, Jeddah, and Dammam.",
  intro: `Utilities in Saudi Arabia are provided by government-linked companies and remain relatively affordable compared to Western countries, though subsidy reforms have gradually increased costs in recent years. The Saudi Electricity Company (SEC) is the sole provider of electrical power across the Kingdom, while the National Water Company (NWC) handles water supply and wastewater services in major cities. Gas for cooking is typically supplied via bottled LPG cylinders from distributors such as Saudi Gas and Naygas.

Electricity tariffs in Saudi Arabia are structured on a tiered consumption basis, with higher usage attracting higher per-unit rates. The residential tariff starts at SAR 0.18 per kWh for consumption up to 6,000 kWh per month and increases to SAR 0.30 per kWh for consumption above that threshold. Given Saudi Arabia's extreme summer temperatures (regularly exceeding 45C in inland cities), air conditioning accounts for a significant portion of household electricity consumption, and summer electricity bills can be substantially higher than winter bills.

Water tariffs are also tiered, with the NWC charging SAR 0.15 per cubic metre for the first block of consumption and increasing rates for higher usage. Saudi Arabia relies heavily on desalinated seawater, with the Saline Water Conversion Corporation (SWCC) operating some of the world's largest desalination plants. The cost of water production is high, but government subsidies keep consumer prices well below the true production cost. Smart meters are being rolled out across the Kingdom to improve billing accuracy and encourage conservation, and both SEC and NWC now offer mobile apps and online portals for account management and bill payment.`,
  citySections: [
    {
      city: "Riyadh",
      slug: "riyadh",
      content: `Riyadh's utility costs are shaped by the city's inland desert climate, where summer temperatures routinely exceed 45C from June through September. Air conditioning is essential and operates nearly 24 hours a day during summer months, making electricity the single largest utility expense for most households. A typical three-bedroom apartment in Riyadh can expect monthly electricity bills of SAR 300 to SAR 600 in winter and SAR 800 to SAR 2,000 or more during peak summer months, depending on the size of the unit and the efficiency of the AC system.

SEC has been rolling out smart meters across Riyadh, replacing older analogue meters with digital units that provide real-time consumption data. Smart meters allow residents to track usage through the SEC (ALKAHRABA) mobile app, helping to identify energy waste and manage costs. The transition has improved billing accuracy but has also led to some residents noticing higher bills as estimated readings are replaced by actual consumption data.

Water supply in Riyadh is managed by NWC, with water sourced primarily from desalination plants on the coast and transported via pipeline, supplemented by groundwater. Monthly water bills for a typical apartment range from SAR 50 to SAR 200, though larger villas with gardens can see significantly higher consumption. NWC has invested in upgrading Riyadh's water distribution network, reducing losses and improving pressure, but some older neighbourhoods may still experience occasional pressure fluctuations.

Cooking gas (LPG) is delivered in cylinders by authorised distributors. A standard 22 kg cylinder costs approximately SAR 18 and typically lasts a family of four between four and six weeks depending on cooking frequency. SEC and NWC bills can be paid through bank apps, the SADAD payment system, and the utilities companies' own apps and websites. Compound residents often have utilities included in their rent or managed through the compound administration, which simplifies the process.`,
    },
    {
      city: "Jeddah",
      slug: "jeddah",
      content: `Jeddah's utility landscape is influenced by the city's coastal location and high humidity. While summer temperatures are slightly lower than Riyadh (typically 38-42C), the high humidity means air conditioning is still essential and dehumidifiers are commonly used, contributing to significant electricity consumption. Monthly electricity bills for a three-bedroom apartment in Jeddah typically range from SAR 250 to SAR 500 in cooler months and SAR 700 to SAR 1,800 during summer.

Water supply is a particular consideration in Jeddah. The city has historically faced water infrastructure challenges, and while NWC has made significant investments in upgrading the network, some areas still rely on tanker delivery to supplement mains supply. Desalinated water from the Shoaiba desalination plant (one of the largest in the world) serves much of the city. Water bills tend to be slightly higher in Jeddah than in Riyadh, with monthly costs ranging from SAR 60 to SAR 250 for apartments, reflecting both consumption and the higher cost of coastal desalination and distribution.

Jeddah's older neighbourhoods, particularly in the central and southern parts of the city, may have aging utility infrastructure that can lead to occasional power fluctuations or water pressure issues. Newer developments in northern Jeddah (Obhur, Al Shati) generally have more reliable utility connections. Many residential buildings include water storage tanks on the roof to buffer against supply interruptions, and expats should verify that their building has adequate storage when choosing accommodation.

SEC has deployed smart meters in many parts of Jeddah, and the ALKAHRABA app provides consumption tracking and digital bill payment. The city also benefits from a growing solar energy sector, with some newer residential developments incorporating rooftop solar panels that can reduce electricity costs. NWC's customer service in Jeddah has improved with the introduction of online reporting for leaks, billing disputes, and service requests through their Moya app.`,
    },
    {
      city: "Dammam",
      slug: "dammam",
      content: `The Eastern Province's utility infrastructure benefits from proximity to Saudi Arabia's energy production centres. Electricity supply in Dammam, Al Khobar, and Dhahran is generally reliable, with SEC managing the grid for the region. Summer temperatures in the Eastern Province are comparable to Riyadh (often exceeding 45C) with added coastal humidity in Dammam and Al Khobar, making air conditioning costs significant. Monthly electricity bills for a three-bedroom unit typically range from SAR 250 to SAR 500 in winter and SAR 700 to SAR 1,500 in summer.

Within Saudi Aramco residential compounds in Dhahran, utilities are typically included in the housing package provided to employees. Aramco manages its own power and water infrastructure within the compound, and residents do not receive individual utility bills. This is a significant financial benefit that can save Aramco employees SAR 1,000 to SAR 3,000 or more per month compared to non-compound living.

For non-Aramco expats in the metropolitan area, utility services follow the standard SEC and NWC arrangements. Water in the Eastern Province is sourced from a combination of desalination, groundwater, and treated wastewater (for non-potable uses). Monthly water bills for apartments are typically SAR 40 to SAR 180, slightly lower than Jeddah due to the availability of local groundwater sources that supplement desalinated supply.

Industrial zones in Dammam and Jubail have separate utility tariff structures that differ from residential rates. Expats working in industrial roles should be aware that their employer's facility may operate under different SEC tariff categories, though this does not affect residential utility bills. The Eastern Province also has a growing district cooling sector, where centralised chilled-water plants provide air conditioning to residential and commercial buildings at potentially lower costs than individual AC units. Some newer residential developments in Al Khobar offer district cooling connections as an alternative to conventional AC systems.`,
    },
  ],
  faqs: [
    {
      question: "How much do utilities cost per month in Saudi Arabia?",
      answer:
        "Total monthly utility costs for a typical three-bedroom apartment range from SAR 400 to SAR 800 in cooler months and SAR 1,000 to SAR 2,500 during summer, with electricity being the largest component due to air conditioning. This includes electricity (SAR 250-2,000), water (SAR 40-250), cooking gas (SAR 18 per cylinder, lasting 4-6 weeks), and does not include internet (covered separately). Actual costs depend heavily on property size, insulation quality, and AC usage habits.",
    },
    {
      question: "How do I set up electricity and water accounts in Saudi Arabia?",
      answer:
        "For a new connection or account transfer, contact SEC for electricity and NWC for water. You will need your Iqama, the property's deed or rental contract (registered on Ejar), and the previous tenant's final bill clearance. Applications can be submitted online through SEC and NWC portals. In compounds and some managed buildings, the landlord or property manager handles utility account setup.",
    },
    {
      question: "Why is my summer electricity bill so much higher than winter?",
      answer:
        "Air conditioning accounts for 60-70% of residential electricity consumption in Saudi Arabia. During summer (June-September), when temperatures regularly exceed 45C in cities like Riyadh and Dammam, AC units run nearly continuously. Additionally, SEC uses a tiered tariff system where higher consumption is charged at higher rates (SAR 0.18/kWh for the first 6,000 kWh, SAR 0.30/kWh above that), meaning heavy summer usage pushes you into the more expensive tier.",
    },
    {
      question: "Is tap water safe to drink in Saudi Arabia?",
      answer:
        "Desalinated tap water in Saudi Arabia meets WHO standards and is technically safe at the treatment plant. However, water quality can be affected by building storage tanks and internal plumbing, particularly in older buildings. Most residents, including Saudis, prefer to drink bottled water or use filtration systems. Five-gallon water dispensers from brands like Nova, Hana, and Berain are widely available for home delivery at approximately SAR 5-8 per bottle.",
    },
    {
      question: "What are smart meters and how do they affect my bills?",
      answer:
        "Smart meters are digital electricity meters being installed by SEC across Saudi Arabia to replace older analogue models. They provide real-time consumption data, enable remote meter reading, and improve billing accuracy. While smart meters do not change tariff rates, they eliminate estimated billing, which means your bills will reflect actual usage. You can monitor your consumption through the ALKAHRABA app and adjust habits to manage costs.",
    },
  ],
  sources: [
    {
      name: "Saudi Electricity Company (SEC)",
      url: "https://www.se.com.sa/en",
    },
    {
      name: "National Water Company (NWC)",
      url: "https://www.nwc.com.sa/English/Pages/default.aspx",
    },
    {
      name: "Electricity & Cogeneration Regulatory Authority (ECRA)",
      url: "https://www.ecra.gov.sa/en-us/Pages/default.aspx",
    },
  ],
  relatedLinks: [
    { label: "Saudi Arabia Expat Guide", href: "/saudi-arabia/guide/" },
    {
      label: "Cost of Living in Saudi Arabia",
      href: "/saudi-arabia/cost-of-living/",
    },
    { label: "Living in Riyadh", href: "/saudi-arabia/riyadh/" },
    { label: "Living in Jeddah", href: "/saudi-arabia/jeddah/" },
    { label: "Utilities in the UAE", href: "/uae/utilities/" },
    { label: "Utilities in Qatar", href: "/qatar/utilities/" },
    {
      label: "Telecom in Saudi Arabia",
      href: "/saudi-arabia/telecom/",
    },
  ],
  calculator: "utilities",
};
