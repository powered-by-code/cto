import data from "@/data.json";
import { sortByOrder } from "@/utils/sortByOrder";

interface NavLink {
  href?: string;
  label: string;
  hidden?: boolean;
  showInFooterOnly?: boolean;
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
        label: "Consultation (30 min free)",
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
      { href: "/articles", label: "Articles" },
      { href: "/case-studies", label: "Case Studies", hidden: true },
      { href: "/resources/podcasts", label: "Podcasts" },
    ],
    // hidden: true,
  },
  {
    label: "Free Tools",
    children: [
      { href: "/it-budget-optimizer", label: "IT Budget Optimizer" },
      { href: "/assessment", label: "Fractional CTO Need Assessment Test" },
    ],
  },
  {
    href: "/referral-program",
    label: "Referral Program",
    showInFooterOnly: true,
    children: []
  }
];

// For the main navigation, filter out hidden and footer-only items
export const navLinks = links
  .filter((link) => !link.hidden && !link.showInFooterOnly)
  .map((link) => ({
    ...link,
    children: link.children?.filter((child) => !child?.hidden),
  }));

// For the footer, filter out only hidden items (keep footer-only items)
export const footerLinks = links
  .filter((link) => !link.hidden)
  .map((link) => ({
    ...link,
    children: link.children?.filter((child) => !child?.hidden),
  }));
