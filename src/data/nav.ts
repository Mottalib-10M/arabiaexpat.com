export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "UAE",
    href: "/uae/guide/",
    children: [
      { label: "Expat Guide", href: "/uae/guide/" },
      { label: "Visa Guide", href: "/uae/visa-guide/" },
      { label: "Cost of Living", href: "/uae/cost-of-living/" },
      { label: "Dubai", href: "/uae/dubai/" },
      { label: "Abu Dhabi", href: "/uae/abu-dhabi/" },
    ],
  },
  {
    label: "Qatar",
    href: "/qatar/guide/",
    children: [
      { label: "Expat Guide", href: "/qatar/guide/" },
      { label: "Visa Guide", href: "/qatar/visa-guide/" },
      { label: "Cost of Living", href: "/qatar/cost-of-living/" },
      { label: "Doha", href: "/qatar/doha/" },
    ],
  },
  {
    label: "Saudi Arabia",
    href: "/saudi-arabia/guide/",
    children: [
      { label: "Expat Guide", href: "/saudi-arabia/guide/" },
      { label: "Visa Guide", href: "/saudi-arabia/visa-guide/" },
      { label: "Cost of Living", href: "/saudi-arabia/cost-of-living/" },
      { label: "Riyadh", href: "/saudi-arabia/riyadh/" },
      { label: "Jeddah", href: "/saudi-arabia/jeddah/" },
    ],
  },
  {
    label: "Guides",
    href: "/guides/",
    children: [
      { label: "Driving Licence", href: "/guides/driving-licence/" },
      { label: "Utilities Setup", href: "/guides/utilities-setup/" },
      { label: "Schools & Education", href: "/guides/schools-education/" },
      { label: "Mobile & Internet", href: "/guides/telecom-mobile/" },
      { label: "Healthcare", href: "/guides/healthcare-expats-gulf/" },
      { label: "Banking", href: "/guides/banking-expats-gulf/" },
      { label: "Best Country for Expats", href: "/guides/best-country-for-expats-gulf/" },
    ],
  },
  {
    label: "Relocating From",
    href: "/relocating-from/india/",
    children: [
      { label: "India", href: "/relocating-from/india/" },
      { label: "Pakistan", href: "/relocating-from/pakistan/" },
      { label: "Philippines", href: "/relocating-from/philippines/" },
      { label: "Egypt", href: "/relocating-from/egypt/" },
      { label: "Bangladesh", href: "/relocating-from/bangladesh/" },
      { label: "United Kingdom", href: "/relocating-from/uk/" },
      { label: "United States", href: "/relocating-from/usa/" },
      { label: "France", href: "/relocating-from/france/" },
    ],
  },
];

export const footerNav = {
  countries: [
    { label: "UAE Guide", href: "/uae/guide/" },
    { label: "Qatar Guide", href: "/qatar/guide/" },
    { label: "Saudi Arabia Guide", href: "/saudi-arabia/guide/" },
  ],
  guides: [
    { label: "Driving Licence Guide", href: "/guides/driving-licence/" },
    { label: "Utilities Setup", href: "/guides/utilities-setup/" },
    { label: "Schools & Education", href: "/guides/schools-education/" },
    { label: "Mobile & Internet", href: "/guides/telecom-mobile/" },
    { label: "Healthcare Guide", href: "/guides/healthcare-expats-gulf/" },
    { label: "Banking Guide", href: "/guides/banking-expats-gulf/" },
  ],
  resources: [
    { label: "UAE Visa Guide", href: "/uae/visa-guide/" },
    { label: "Qatar Visa Guide", href: "/qatar/visa-guide/" },
    { label: "Saudi Visa Guide", href: "/saudi-arabia/visa-guide/" },
    { label: "UAE Cost of Living", href: "/uae/cost-of-living/" },
    { label: "Qatar Cost of Living", href: "/qatar/cost-of-living/" },
    { label: "Saudi Cost of Living", href: "/saudi-arabia/cost-of-living/" },
  ],
  sisterSites: [
    { label: "Salary Data (taxfreesalaries.com)", href: "https://taxfreesalaries.com/" },
    { label: "Business Setup (thedubaisetup.com)", href: "https://thedubaisetup.com/" },
    { label: "Property Prices (uaepriceindex.com)", href: "https://uaepriceindex.com/" },
  ],
  legal: [
    { label: "About", href: "/about/" },
    { label: "Methodology", href: "/methodology/" },
    { label: "News", href: "/news/" },
    { label: "Contact", href: "/contact/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Use", href: "/terms/" },
  ],
};
