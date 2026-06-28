import type { ThematicPageData } from "../../types/thematic";

export const uaeHealthcare: ThematicPageData = {
  slug: "healthcare",
  theme: "healthcare",
  countryKey: "uae",
  countrySlug: "uae",
  countryName: "UAE",
  title: "Healthcare in the UAE: Hospitals, Insurance & Costs for Expats",
  description:
    "A comprehensive guide to healthcare in the UAE for expats, covering mandatory insurance, top hospitals in Dubai and Abu Dhabi, costs, and how the health system works.",
  intro: `The UAE has one of the most advanced healthcare systems in the Middle East, with world-class hospitals, internationally accredited facilities, and a growing number of specialist centres. Healthcare is regulated at the emirate level: the Dubai Health Authority (DHA) oversees the health sector in Dubai, while the Department of Health (DoH) — formerly HAAD — regulates healthcare in Abu Dhabi. Both authorities mandate that all residents must have health insurance, making the UAE one of the few countries in the region with universal mandatory coverage for expats.

Employers are legally required to provide health insurance for their employees and, in Abu Dhabi, for their dependants as well. In Dubai, employer-sponsored insurance covers the employee, and while covering dependants is strongly encouraged, it is not yet universally mandated. Insurance plans range from basic packages (covering emergency and inpatient care) to comprehensive plans that include outpatient visits, dental, maternity, and optical cover. The minimum benefits are defined by the Essential Benefits Plan (EBP) in Abu Dhabi and the Dubai Health Insurance Law. Most expats with mid-level or senior roles receive enhanced insurance that provides access to the top private hospitals.

The quality of care is generally excellent, particularly at the leading private hospitals, many of which hold Joint Commission International (JCI) accreditation. Wait times at private facilities are typically short — often same-day or next-day appointments — though public hospitals can have longer queues. Costs without insurance can be substantial: a GP consultation at a private hospital ranges from AED 200 (~€50) to AED 500 (~€125), a specialist visit from AED 400 (~€100) to AED 1,000 (~€250), and an MRI scan can cost AED 2,000 (~€500) to AED 5,000 (~€1,250). Emergency visits without insurance can easily exceed AED 5,000 (~€1,250). With insurance, most consultations require only a co-pay of AED 0 to AED 100 (~€25), depending on the plan.`,
  citySections: [
    {
      city: "Dubai",
      slug: "dubai",
      content: `Dubai is home to some of the most prestigious hospitals in the region. Cleveland Clinic Dubai, located at Dubai Healthcare City, is an extension of the renowned Cleveland Clinic in Ohio and offers specialist care in cardiology, oncology, and orthopaedics. Mediclinic, a South African-based hospital group, operates multiple facilities across Dubai including Mediclinic City Hospital and Mediclinic Parkview Hospital, both JCI-accredited. Al Zahra Hospital in Sharjah (serving the broader Dubai metro area) provides affordable multi-specialty care, while NMC Healthcare runs several hospitals and clinics including NMC Royal Hospital DIP. Other notable facilities include American Hospital Dubai, Emirates Hospital Jumeirah, Saudi German Hospital, and King's College Hospital London (Dubai Hills).

The Dubai Health Authority (DHA) operates the public healthcare network, including Rashid Hospital (the main government trauma centre), Dubai Hospital, and Latifa Women and Children Hospital. Public facilities are available to all residents with a valid health card, though wait times are longer. DHA has invested heavily in digital health initiatives — the Dubai Health app allows residents to book appointments, access medical records, and renew health cards online. Dubai Health Insurance Law No. 11 of 2013 mandates that every resident must have health insurance, and sponsors (employers or family heads) face fines of AED 500 (~€125) per month for non-compliance.

Insurance options in Dubai are plentiful. Major insurers include Daman (the National Health Insurance Company), Oman Insurance, AXA Gulf, MetLife, Cigna, and Bupa. Plans are typically tiered: basic plans start at around AED 500–700 (~€125–175) per person per year (covering only inpatient and emergency care), while comprehensive plans offering full outpatient, dental, maternity, and international coverage can cost AED 8,000–15,000 (~€2,000–3,750) or more per year. Many expats in professional roles receive insurance valued at AED 5,000–10,000 (~€1,250–2,500) annually as part of their employment package. Pharmacies are widespread — Boots, Life Pharmacy, and BinSina are major chains — and most common medications are available over the counter or with a prescription.`,
    },
    {
      city: "Abu Dhabi",
      slug: "abu-dhabi",
      content: `Abu Dhabi boasts several internationally renowned hospitals. Cleveland Clinic Abu Dhabi, located on Al Maryah Island, is one of the most advanced multi-specialty hospitals in the region, with 364 beds and centres of excellence in heart and vascular, neurology, respiratory, and digestive diseases. Burjeel Holdings operates Burjeel Medical City and several other hospitals across the emirate, offering comprehensive care from primary to quaternary levels. The SEHA network (Abu Dhabi Health Services Company) manages the public healthcare system, including Sheikh Khalifa Medical City, Al Mafraq Hospital, Tawam Hospital in Al Ain, and numerous ambulatory care centres throughout the emirate.

The Department of Health (DoH) regulates all healthcare providers in Abu Dhabi and enforces the mandatory health-insurance requirement. Under Abu Dhabi's system, employers must provide insurance for employees and their dependants — this is more comprehensive than Dubai's requirement. The Daman Thiqa programme provides coverage for UAE nationals, while expats are covered through employer-sponsored private insurance. The minimum Essential Benefits Plan covers inpatient, outpatient, maternity, mental health, dental (emergency), and prescription medications. Most professional-tier plans also include direct-billing at major hospitals, meaning patients only pay a co-pay (typically AED 0–50 / ~€0–12.50 for network providers) rather than paying upfront and claiming reimbursement.

Abu Dhabi has also invested in preventive health. The DoH runs population health screening programmes, and employers are required to include annual health check-ups in insurance plans. The emirate has dedicated centres for chronic disease management, mental health (including Al Amal Psychiatric Hospital), and rehabilitation. For specialised or complex cases not available locally, the DoH can arrange treatment abroad through its overseas treatment programme. Pharmacies are regulated by the DoH, and prescription requirements are strictly enforced — certain medications commonly available over the counter in other countries (such as codeine-containing painkillers) require a prescription in the UAE. Major pharmacy chains include LIFEPharmacy, MedExpress, and Al Manara.`,
    },
  ],
  faqs: [
    {
      question: "Is health insurance mandatory in the UAE?",
      answer:
        "Yes. Both Dubai and Abu Dhabi require all residents to have health insurance. Employers must provide it for employees, and in Abu Dhabi, for dependants as well. Operating without insurance can result in fines, visa renewal refusal, and limited access to non-emergency healthcare.",
    },
    {
      question: "How much does a doctor visit cost in the UAE?",
      answer:
        "With insurance, a GP visit typically requires a co-pay of AED 0–100 (~€0–25). Without insurance, a private GP consultation costs AED 200–500 (~€50–125), a specialist visit AED 400–1,000 (~€100–250), and emergency room visits can exceed AED 5,000 (~€1,250) depending on the treatment required.",
    },
    {
      question: "Can I use my Dubai health insurance in Abu Dhabi and vice versa?",
      answer:
        "It depends on your plan. Many comprehensive plans offer UAE-wide coverage, but basic plans may be restricted to the emirate of issuance. Always check your insurance network list. In emergencies, all hospitals are required to treat patients regardless of insurance status, though bills will follow.",
    },
    {
      question: "What vaccinations are required in the UAE?",
      answer:
        "There are no mandatory vaccinations for entering the UAE, but children must follow the UAE national immunisation schedule for school enrolment. This includes vaccines for hepatitis B, polio, MMR, and DTP. COVID-19 vaccination requirements have been relaxed but may change; check current DoH/DHA guidelines.",
    },
    {
      question: "Are mental health services available for expats in the UAE?",
      answer:
        "Yes. The UAE has significantly expanded mental health services in recent years. Both government and private hospitals offer psychiatry and psychology services. Community mental health centres, online therapy platforms (like Takalam and Lighthouse Arabia), and employee assistance programmes (EAPs) are increasingly common. The stigma around mental health has reduced considerably.",
    },
  ],
  sources: [
    {
      name: "Dubai Health Authority (DHA)",
      url: "https://www.dha.gov.ae",
    },
    {
      name: "Department of Health — Abu Dhabi (DoH)",
      url: "https://www.doh.gov.ae",
    },
    {
      name: "Cleveland Clinic Abu Dhabi",
      url: "https://www.clevelandclinicabudhabi.ae",
    },
  ],
  relatedLinks: [
    { label: "UAE Expat Guide", href: "/uae/guide/" },
    { label: "Cost of Living in the UAE", href: "/uae/cost-of-living/" },
    { label: "Living in Dubai", href: "/uae/dubai/" },
    { label: "Living in Abu Dhabi", href: "/uae/abu-dhabi/" },
    { label: "Education in the UAE", href: "/uae/education/" },
    { label: "Visa Types in the UAE", href: "/uae/visa/" },
    { label: "Healthcare in Qatar", href: "/qatar/healthcare/" },
    { label: "Healthcare in Saudi Arabia", href: "/saudi-arabia/healthcare/" },
  ],
  calculator: "healthcare",
};
