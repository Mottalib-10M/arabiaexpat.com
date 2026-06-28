import type { ThematicPageData } from "../../types/thematic";

export const uaeTransport: ThematicPageData = {
  slug: "transport",
  theme: "transport",
  countryKey: "uae",
  countrySlug: "uae",
  countryName: "UAE",
  title: "Transport in the UAE: Metro, Taxis, Driving & Salik for Expats",
  description:
    "Guide to getting around the UAE as an expat. Covers Dubai Metro, buses, Salik tolls, nol cards, taxis, car ownership, and public transport in Abu Dhabi.",
  intro: `Getting around the UAE is relatively easy, but the best option depends heavily on which emirate you live in and your daily routine. Dubai has the most developed public-transport network in the Gulf, anchored by the Dubai Metro, tram, bus system, and water taxis. Abu Dhabi, while expanding its public transport, remains more car-dependent. Between the two cities, comfortable inter-city buses run every 15–30 minutes and take around 90 minutes. Ride-hailing apps like Uber and Careem (a regional competitor acquired by Uber) are widely available and affordable throughout the UAE.

Car ownership is extremely common among expats, with the UAE having one of the highest car-to-population ratios in the world. New and used cars are relatively affordable due to low import duties, and fuel prices are among the lowest globally — as of mid-2025, petrol costs around AED 3.00–3.30 per litre (set monthly by the Ministry of Energy based on global oil prices). However, car ownership comes with additional costs: Salik toll charges in Dubai (AED 4 per gate), parking fees (AED 2–4/hour in metered zones), annual registration renewal (AED 350–500), insurance (AED 1,500–4,000/year depending on the vehicle), and the inevitable wear from the region's extreme summer heat.

Obtaining a UAE driving licence is straightforward for some nationalities and more involved for others. Holders of licences from 36 recognised countries (including the US, UK, most EU countries, Australia, Canada, and Japan) can convert their licence to a UAE one by simply passing an eye test and submitting paperwork at a traffic department or registered typing centre. All other nationalities must take driving lessons at an authorised driving school (such as Emirates Driving Institute, Belhasa, or Galadari) and pass theory, yard, and road tests. The process typically takes 2–4 months and costs AED 5,000–8,000 in total.`,
  citySections: [
    {
      city: "Dubai",
      slug: "dubai",
      content: `Dubai's public transport system is managed by the Roads and Transport Authority (RTA) and is one of the most modern in the region. The Dubai Metro is the backbone of the network, with two lines: the Red Line (running from Rashidiya to UAE Exchange/Expo 2020 via the airport, DIFC, Business Bay, and Dubai Marina) and the Green Line (connecting Etisalat station to Creek through Deira and Bur Dubai). The Metro is driverless, air-conditioned, and has dedicated women-and-children carriages and a Gold Class with wider seats. Fares are zone-based, ranging from AED 3 to AED 8.50 per trip using a nol card (AED 2–6.50 with a Silver nol).

The nol card is the universal payment method for all RTA transport — Metro, buses, tram, water bus, and some parking meters. Cards come in four types: Red (disposable, single/return journeys), Silver (rechargeable, for regular users), Gold (premium, access to Gold Class carriages and seating), and Blue (personalised, auto-top-up). A Silver nol card costs AED 25 (including AED 19 credit) and can be purchased at any Metro station, bus station, or online. The Dubai Tram runs along Jumeirah Beach Residence and connects to the Metro at DMCC and Sobha Realty stations, serving the Marina/JBR area.

Dubai's Salik toll system uses automatic radio-frequency gates at eight locations across the city: Al Maktoum Bridge, Al Garhoud Bridge, Al Safa, Al Barsha, Airport Tunnel, Jebel Ali, Al Mamzar South, and Sheikh Zayed Bridge. Each crossing costs AED 4, and a daily cap of AED 24 applies (maximum of 6 charges per day). A Salik account requires a minimum balance of AED 100, and the tag costs AED 50. For regular commuters, toll charges can add AED 400–800 per month. Taxis are metered: the flag fall is AED 5 (AED 5.50 from the airport), and the rate is AED 1.96 per kilometre. Ride-hailing apps (Uber, Careem) offer similar pricing with the convenience of cashless payment and upfront fare estimates.

For inter-city travel, the Abu Dhabi–Dubai bus (E100/E101) departs every 15–30 minutes from Al Ghubaiba or Ibn Battuta stations, costs AED 25, and takes approximately 90 minutes. The Sharjah–Dubai bus routes are equally frequent. Long-term, the Etihad Rail network will connect Abu Dhabi, Dubai, and other emirates by rail, with passenger services expected in the coming years.`,
    },
    {
      city: "Abu Dhabi",
      slug: "abu-dhabi",
      content: `Abu Dhabi's public transport network is less extensive than Dubai's and centred primarily around buses. The Department of Municipalities and Transport (DMT) operates a network of local and intercity bus routes, with main hubs at Abu Dhabi Central Bus Station (on Hazza Bin Zayed Street) and Al Wahda Mall. Bus fares are AED 2 per journey using a Hafilat card (Abu Dhabi's equivalent of the nol card). While the bus network covers most major areas including Yas Island, Saadiyat Island, and Khalifa City, frequencies can be low (every 20–60 minutes on some routes), making it impractical as a primary mode of transport for many expats.

Abu Dhabi does not currently have a metro system, though plans for a light-rail or metro network have been discussed as part of the capital's long-term urban plan. As a result, most expats rely on private cars or ride-hailing services. The Darb toll-gate system was introduced in 2024, operating similarly to Dubai's Salik with automatic charges at designated gates across the city, including key bridges and highway entry points. Tolls are AED 4 per crossing during peak hours and free or reduced during off-peak periods, with a daily cap. Abu Dhabi's taxi service is operated by TransAD and several private companies; metered fares start at AED 5 (flag fall) with AED 1.83 per kilometre.

Parking in Abu Dhabi is managed by Mawaqif, the municipal parking system. Zones are colour-coded: premium (blue) areas in the central business district cost AED 3 per hour, standard (grey) zones cost AED 2 per hour, and residential (orange) permit zones require an annual permit (AED 800 for residents). Free parking is available in many suburban areas and during Friday and public holidays in metered zones. For expats commuting between Abu Dhabi and Dubai, the drive takes approximately 1.5 hours via Sheikh Zayed Road (E11), though traffic at peak hours — particularly near the Ghweifat or Sweihan interchange — can extend this significantly. The inter-city bus is a cost-effective alternative for daily commuters.`,
    },
  ],
  faqs: [
    {
      question: "How much does the Dubai Metro cost?",
      answer:
        "Fares depend on the number of zones crossed. With a Silver nol card: AED 3 within one zone, AED 5 for two zones, and AED 7.50 for a full journey across all zones. Gold Class is roughly double. A monthly unlimited pass costs AED 350 for all zones. The Metro operates from 5:00 AM to midnight (Saturday–Wednesday), extending to 1:00 AM on Thursday and Friday.",
    },
    {
      question: "What is Salik and how much does it cost?",
      answer:
        "Salik is Dubai's electronic road-toll system. Each gate crossing costs AED 4, with a daily maximum of AED 24 (6 charges). A Salik tag costs AED 50 and can be purchased online or at petrol stations. The tag is linked to a prepaid account that must maintain a minimum AED 100 balance. Most regular commuters spend AED 400–800/month on Salik.",
    },
    {
      question: "Can I convert my foreign driving licence to a UAE licence?",
      answer:
        "Citizens of 36 countries (including the US, UK, EU, Australia, Canada, South Korea, and Japan) can convert their licence directly by passing an eye test and submitting paperwork — no driving test required. All other nationalities must attend a driving school and pass theory, yard, and road tests, which costs AED 5,000–8,000 and takes 2–4 months.",
    },
    {
      question: "Is it better to own a car or use taxis in the UAE?",
      answer:
        "It depends on your location and lifestyle. In Dubai, if you live near a Metro station and work in DIFC/Downtown/Media City, public transport can be sufficient. In Abu Dhabi, a car is almost essential due to limited public transport. Car ownership costs roughly AED 2,000–4,000/month (loan, insurance, fuel, tolls, parking) versus AED 1,500–3,000/month for regular taxi/ride-hailing use.",
    },
    {
      question: "How much does car insurance cost in the UAE?",
      answer:
        "Third-party insurance (the legal minimum) costs AED 700–1,200 per year. Comprehensive insurance ranges from AED 1,500 to AED 4,000+, depending on the vehicle's value, your age, and driving history. Premiums are lower for drivers over 25 with a clean record. Insurance can be purchased online through aggregators like Yallacompare or directly from insurers such as AXA, RSA, and Oman Insurance.",
    },
  ],
  sources: [
    {
      name: "RTA — Roads and Transport Authority (Dubai)",
      url: "https://www.rta.ae",
    },
    {
      name: "DMT — Department of Municipalities and Transport (Abu Dhabi)",
      url: "https://www.dmt.gov.ae",
    },
    {
      name: "Salik — Dubai Toll System",
      url: "https://www.salik.ae",
    },
  ],
  relatedLinks: [
    { label: "UAE Expat Guide", href: "/uae/guide/" },
    { label: "Cost of Living in the UAE", href: "/uae/cost-of-living/" },
    { label: "Living in Dubai", href: "/uae/dubai/" },
    { label: "Living in Abu Dhabi", href: "/uae/abu-dhabi/" },
    { label: "Housing in the UAE", href: "/uae/housing/" },
    { label: "Transport in Qatar", href: "/qatar/transport/" },
    { label: "Transport in Saudi Arabia", href: "/saudi-arabia/transport/" },
  ],
  calculator: "transport",
};
