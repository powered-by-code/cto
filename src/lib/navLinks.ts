import data from "@/data.json";

const sortByOrder = (a: any, b: any) => (a?.order ?? Infinity) - (b?.order ?? Infinity);

export const navLinks = [
  { href: "/about-us", label: "ABOUT US" },
  {
    href: "/services",
    label: "SERVICES",
    children: [
      ...data.services
        .sort(sortByOrder)
        .map((service) => ({
          href: `/services/${service.id}`,
          label: service.title,
        })),
      {
        href: "/contact",
        label: "Consultation (15 min free)",
      },
    ],
  },
  {
    href: "/industries",
    label: "INDUSTRIES",
    children: data.industries
      .sort(sortByOrder)
      .map((industry) => ({
        href: `/industries/${industry.id}`,
        label: industry.title,
      })),
  },
  {
    href: "/resources",
    label: "RESOURCES",
    children: [
      { href: "/resources", label: "ARTICLES" },
      { href: "/case-studies", label: "CASE STUDIES" },
      { href: "/resources/podcasts", label: "PODCASTS" },
    ],
  },
  {
    label: "Free Tools",
    children: [
      { href: "/cost-calculator", label: "IT Budget Optimizer" },
      { href: "/assessment", label: "Fractional CTO Need Assessment Test" },
    ],
  },
];
