import data from "@/data.json";
import { sortByOrder } from "@/utils/sortByOrder";

interface NavLink {
  href?: string;
  label: string;
  hidden?: boolean;
  children?: NavLink[];
}

export const links: NavLink[] = [
  { href: "/about-us", label: "ABOUT US" },
  {
    href: "/services",
    label: "SERVICES",
    children: [
      ...data.services.sort(sortByOrder).map((service) => ({
        href: `/services/${service.id}`,
        label: service.title,
        hidden: service.hidden,
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
    children: data.industries.sort(sortByOrder).map((industry) => ({
      href: `/industries/${industry.id}`,
      label: industry.title,
      hidden: industry?.hidden,
    })),
    hidden: true,
  },
  {
    href: "/resources",
    label: "RESOURCES",
    children: [
      { href: "/resources", label: "ARTICLES" },
      { href: "/case-studies", label: "CASE STUDIES" },
      { href: "/resources/podcasts", label: "PODCASTS" },
    ],
    hidden: true,
  },
  {
    label: "Free Tools",
    children: [
      { href: "/it-budget-optimizer", label: "IT Budget Optimizer" },
      { href: "/assessment", label: "Fractional CTO Need Assessment Test" },
    ],
  },
];

export const navLinks = links
  .filter((link) => !link.hidden)
  .map((link) => ({
    ...link,
    children: link.children?.filter((child) => !child?.hidden),
  }));
