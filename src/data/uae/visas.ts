export const uaeVisas = {
  types: [
    {
      name: "Employment Visa",
      duration: "2-3 years (renewable)",
      requirements: ["Job offer from UAE employer", "Medical fitness test", "Emirates ID registration", "Educational certificates attested by home country and UAE embassy"],
      process: "Employer initiates via MoHRE portal. Entry permit issued, then status change and Emirates ID processing in-country. Total timeline: 2-4 weeks.",
      cost: "AED 3,000-5,000 (~€750-1,250) (typically covered by employer)",
    },
    {
      name: "Golden Visa",
      duration: "10 years (renewable)",
      requirements: ["Investors with AED 2M+ (~€500,000+) property or business investment", "Specialized talent (scientists, doctors, engineers)", "Outstanding students with GPA 3.8+", "Entrepreneurs with approved projects"],
      process: "Apply through ICA or GDRFA portal. Self-sponsored, no employer needed. Includes family sponsorship rights.",
      cost: "AED 2,800-4,500 (~€700-1,125)",
    },
    {
      name: "Green Visa",
      duration: "5 years (renewable)",
      requirements: ["Skilled workers earning AED 15,000+ (~€3,750+) monthly", "Freelancers with valid permit", "Investors in commercial enterprises"],
      process: "Self-sponsored residence. Apply through ICA portal. No employer sponsor required.",
      cost: "AED 2,200-3,500 (~€550-875)",
    },
    {
      name: "Freelancer Visa",
      duration: "1-2 years (renewable)",
      requirements: ["Freelance permit from an approved free zone", "Proof of professional qualifications", "Valid passport with 6+ months validity"],
      process: "Obtain freelance permit through designated free zones (Dubai South, Fujairah Creative City, etc.), then apply for residence visa.",
      cost: "AED 7,500-15,000 (~€1,875-3,750) annually (including free zone license)",
    },
  ],
  generalNotes: [
    "All visa applicants must pass a medical fitness test.",
    "Emirates ID is mandatory for all residents.",
    "Visa stamping must be done within 60 days of entry.",
    "Employment visa holders can sponsor spouse and children.",
    "New flexible work permits allow multiple employers.",
  ],
} as const;
