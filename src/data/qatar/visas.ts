export const qatarVisas = {
  types: [
    {
      name: "Work Visa",
      duration: "Up to 5 years (renewable)",
      requirements: ["Job offer from Qatar employer", "Medical fitness test", "Educational certificates attested", "Security clearance", "Qatar ID (QID) registration"],
      process: "Employer applies through Ministry of Interior portal. Worker enters on temporary entry permit, completes medical, receives RP and QID. Timeline: 2-6 weeks.",
      cost: "QAR 1,000-3,000 (covered by employer per law)",
    },
    {
      name: "Permanent Residency",
      duration: "Permanent (renewable every 5 years)",
      requirements: ["10+ years legal residence in Qatar", "OR significant contribution to Qatar (athletes, professionals, investors)", "Clean criminal record", "Sufficient income or property ownership"],
      process: "Apply through Ministry of Interior. Limited annual allocations. Grants right to own property, access public services, and invest without local partner.",
      cost: "QAR 1,000-2,000",
    },
    {
      name: "Family Visit Visa",
      duration: "1-3 months",
      requirements: ["Sponsor with minimum salary QAR 10,000", "Family relationship proof", "Accommodation proof"],
      process: "Sponsor applies through Metrash2 app or MOI website. Processing: 3-7 business days.",
      cost: "QAR 200-500",
    },
  ],
  generalNotes: [
    "The kafala (sponsorship) system has been reformed allowing job mobility.",
    "Minimum wage of QAR 1,000/month applies to all workers.",
    "Exit permits have been abolished for most workers.",
    "Qatar ID is mandatory for all residents.",
    "Workers can change employers without employer consent after proper notice.",
  ],
} as const;
