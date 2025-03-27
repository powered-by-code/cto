
import data from "@/data.json";

export const navLinks = [
    { href: "/about-us", label: "ABOUT US" },
    {
      href: "/services",
      label: "SERVICES",
      children: data.services.map((service) => ({
        href: `/services/${service.id}`,
        label: service.title,
      })),
    },
    {
      href: "/industries",
      label: "INDUSTRIES",
      children: data.industries.map((industry) => ({
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
        { href: "/assessment", label: "CTO Needs Assessment" },
      ],
    },
  ];