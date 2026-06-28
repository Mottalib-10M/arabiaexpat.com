import type { ThematicPageData } from "../../types/thematic";

export const uaeTelecom: ThematicPageData = {
  slug: "telecom",
  theme: "telecom",
  countryKey: "uae",
  countrySlug: "uae",
  countryName: "UAE",
  title: "Mobile & Internet in the UAE: Plans, Providers & Prices for Expats",
  description:
    "Guide to mobile phone plans, home internet, and telecom providers in the UAE. Covers du and Etisalat (e&) plans, eSIM options, and broadband for expats in Dubai and Abu Dhabi.",
  intro: `The UAE's telecommunications market is served by two main providers: Etisalat (rebranded as e& in 2022) and du (operated by Emirates Integrated Telecommunications Company). Both offer mobile, fixed-line, home broadband, and TV services, and both have extensive 5G networks covering virtually all urban areas. Unlike many countries with multiple MVNOs (mobile virtual network operators), the UAE market is effectively a duopoly, though competition between the two providers keeps prices relatively competitive by regional standards.

Mobile plans fall into two categories: prepaid (pay-as-you-go) and postpaid (monthly contract). Prepaid SIMs are easy to obtain — you can buy one from any provider store, supermarket, or even vending machines at the airport, with activation requiring only a passport or Emirates ID. Prepaid plans start from around AED 50/month (~€12.50/month) for basic data and calling packages. Postpaid plans, which require an Emirates ID and sometimes a salary certificate, offer better value for regular users, with unlimited local calls and generous data allowances starting from AED 100–150/month (~€25–37.50/month). Both providers support eSIM technology, allowing you to activate a plan digitally without visiting a store — particularly convenient for new arrivals.

Home broadband in the UAE is predominantly fibre-to-the-home (FTTH), with both e& (Etisalat) and du offering high-speed plans. Basic packages with speeds of 150–250 Mbps start from AED 299–389/month (~€75–97/month), while premium plans offering 500 Mbps to 1 Gbps range from AED 549 (~€137) to AED 899/month (~€225/month). Most home broadband packages can be bundled with TV (eLife from e&, du TV) and landline services. It is worth noting that VoIP services such as WhatsApp calls, FaceTime, and Skype were historically blocked in the UAE, though the landscape has evolved — licensed VoIP apps including BOTIM (AED 50/month / ~€12.50/month add-on) and Microsoft Teams/Zoom (for business use) are permitted, while some services remain restricted on consumer plans.`,
  citySections: [
    {
      city: "Dubai",
      slug: "dubai",
      content: `In Dubai, du has historically had a strong presence as the provider of choice for many residential areas, particularly in newer developments. du was originally the sole provider for Dubai's Internet City, Media City, and many freehold communities, though this exclusivity has since ended and both providers now serve most areas. du's postpaid mobile plans include the du Power Plan starting at AED 125/month (~€31/month) (10 GB data, unlimited local calls, 100 international minutes) and the du Connect Plan at AED 200/month (~€50/month) (25 GB data, unlimited local and some international calls). For heavy data users, du offers unlimited data plans from AED 400/month (~€100/month). Prepaid options include the Tourist SIM (AED 49 / ~€12 for 1 GB and 15 local minutes, valid 30 days) and regular prepaid flexi plans from AED 55/month (~€14/month) for 2 GB.

Home broadband in Dubai is available from both du and e&. du's Home Wireless plans (using 5G fixed wireless access) start at AED 299/month (~€75/month) for 150 Mbps, while fibre plans (du Fibre) start at AED 389/month (~€97/month) for 250 Mbps and go up to AED 899/month (~€225/month) for 1 Gbps. e& (Etisalat) offers eLife packages starting at AED 389/month (~€97/month) for 250 Mbps including TV channels and a landline. In older buildings that lack fibre infrastructure, VDSL connections are available but speeds are limited to 50–100 Mbps. Most new residential developments in Dubai (built after 2010) have fibre pre-installed. Installation typically takes 2–5 working days after application, and both providers offer self-installation kits for standard setups.

For business users in Dubai, both providers offer dedicated business plans. du Business offers mobile fleet plans from AED 99/month (~€25/month) per line, dedicated internet from AED 499/month (~€125/month), and managed IT services. e& Business provides similar packages with SLA-backed uptime guarantees. Free zones like DMCC and DIFC have their own IT infrastructure, and some (like DIFC) allow tenants to choose from a wider range of ISPs including Khazna, Orixcom, and Ankabut. Public Wi-Fi is widely available in malls (Dubai Mall, Mall of the Emirates, Ibn Battuta), the Metro (through du's partnership with RTA), and many restaurants and cafes.`,
    },
    {
      city: "Abu Dhabi",
      slug: "abu-dhabi",
      content: `In Abu Dhabi, e& (Etisalat) has traditionally been the dominant provider, having been the sole telecommunications company in the emirate before du entered the market. e&'s postpaid mobile plans include the e& Go plan at AED 100/month (~€25/month) (5 GB data, unlimited local calls), e& Connect at AED 200/month (~€50/month) (25 GB data, unlimited local calls, 200 international minutes), and e& Supreme at AED 400/month (~€100/month) (unlimited data and calls). e&'s prepaid Wasel plans start at AED 55 (~€14) for a SIM with 1 GB data, with top-up data packages available from AED 10 (~€2.50) for 150 MB to AED 200 (~€50) for 22 GB. e& also offers the Visitor Line prepaid SIM for tourists at AED 49 (~€12) (1 GB, 20 local minutes).

Home broadband coverage in Abu Dhabi is extensive, with e&'s eLife fibre service available in most residential areas including Al Reem Island, Saadiyat Island, Khalifa City, and the city centre. Packages start at AED 389/month (~€97/month) for 250 Mbps (including basic TV channels and a landline) and go up to AED 1,099/month (~€275/month) for 2 Gbps. du also serves Abu Dhabi, offering comparable pricing and speeds, though its coverage in some older Abu Dhabi neighbourhoods is less comprehensive than e&'s. 5G fixed wireless broadband is available as an alternative to fibre in areas with limited cabling infrastructure, offering speeds of 100–500 Mbps from AED 299/month (~€75/month).

Abu Dhabi's government entities and free zones generally use e& as their primary provider, though ADGM on Al Maryah Island offers a choice of providers. Both e& and du have flagship stores in major Abu Dhabi malls including Yas Mall, Abu Dhabi Mall, and The Galleria Al Maryah Island. Customer service for both providers is available in Arabic, English, and Hindi/Urdu. For expats working remotely, it is important to note that the UAE's Telecommunications and Digital Government Regulatory Authority (TDRA) regulates VoIP usage. Licensed applications for personal use include BOTIM (AED 50/month / ~€12.50/month) and C'Me (AED 50/month / ~€12.50/month), while enterprise platforms like Microsoft Teams, Zoom, and Cisco Webex function without additional charges on business internet plans.`,
    },
  ],
  faqs: [
    {
      question: "Which mobile provider is better in the UAE — du or Etisalat (e&)?",
      answer:
        "Both providers offer comparable coverage and speeds. e& (Etisalat) has a slight edge in overall 5G coverage and brand reputation, while du often offers more competitive pricing and promotional deals. In Dubai, du is widely used; in Abu Dhabi, e& has stronger market share. Many expats choose based on which provider offers better coverage in their specific building or area.",
    },
    {
      question: "How much does a mobile plan cost in the UAE?",
      answer:
        "Prepaid plans start from AED 50–55/month (~€12.50–14/month) for basic data and calls. Postpaid plans with generous data (10–25 GB) and unlimited local calls range from AED 100–200/month (~€25–50/month). Unlimited data postpaid plans cost AED 350–400/month (~€88–100/month). Tourist SIMs are available from AED 49 (~€12) for short-term visitors. International calling add-ons cost AED 50–100/month (~€12.50–25/month) extra.",
    },
    {
      question: "Can I use WhatsApp calls and FaceTime in the UAE?",
      answer:
        "Standard WhatsApp messaging works perfectly, but WhatsApp voice/video calls and FaceTime are restricted on consumer internet plans. Licensed VoIP apps such as BOTIM (AED 50/month / ~€12.50/month add-on from du or e&) are available for personal voice/video calling. Business platforms like Microsoft Teams and Zoom work without restrictions on business internet plans.",
    },
    {
      question: "How fast is the internet in the UAE?",
      answer:
        "The UAE has some of the fastest average internet speeds in the Middle East. Home fibre plans offer 250 Mbps to 2 Gbps. 5G mobile speeds typically range from 100–500 Mbps and can peak above 1 Gbps in optimal conditions. Fixed wireless 5G broadband offers 100–500 Mbps. The UAE consistently ranks in the top 10 globally for mobile internet speed.",
    },
    {
      question: "Do I need an Emirates ID to get a mobile plan?",
      answer:
        "For prepaid SIMs, a passport is sufficient for activation. For postpaid plans, you need an Emirates ID (and sometimes a salary certificate for credit-check purposes). eSIM activation can be done online with a passport scan for some prepaid plans. Tourists can purchase visitor SIMs with just a passport at the airport or any provider store.",
    },
  ],
  sources: [
    {
      name: "e& (Etisalat)",
      url: "https://www.etisalat.ae",
    },
    {
      name: "du — Emirates Integrated Telecommunications",
      url: "https://www.du.ae",
    },
    {
      name: "TDRA — Telecommunications and Digital Government Regulatory Authority",
      url: "https://www.tdra.gov.ae",
    },
  ],
  relatedLinks: [
    { label: "UAE Expat Guide", href: "/uae/guide/" },
    { label: "Cost of Living in the UAE", href: "/uae/cost-of-living/" },
    { label: "Living in Dubai", href: "/uae/dubai/" },
    { label: "Living in Abu Dhabi", href: "/uae/abu-dhabi/" },
    { label: "Utilities in the UAE", href: "/uae/utilities/" },
    { label: "Housing in the UAE", href: "/uae/housing/" },
    { label: "Telecom in Qatar", href: "/qatar/telecom/" },
    { label: "Telecom in Saudi Arabia", href: "/saudi-arabia/telecom/" },
  ],
  calculator: "telecom",
};
