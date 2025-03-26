"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
import data from "@/data.json";
// const { meetingLink } = data;
import MeetingButton from "./MeetingButton";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Get meeting link from data.json
  // const meetingLink = data.meetingLink;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
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
    { href: "/case-studies", label: "CASE STUDIES" },
    { href: "/resources", label: "RESOURCES" },
    {
      label: "Free Tools",
      children: [
        { href: "/cost-calculator", label: "COST CUTTING CALCULATOR 🖩" },
        { href: "/assessment", label: "CTO Needs Assessment" },
      ],
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-xl font-bold text-primary flex items-center gap-2"
          >
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            {data.companyName}
          </Link>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Mobile menu */}
      <div className="flex-none lg:hidden">
        <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.children ? (
                <details>
                  <summary>{link.label}</summary>
                  <ul className="bg-base-100 rounded-t-none p-2 w-65 z-50">
                    {link.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link href={child.href || ""}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link href={link.href || ""}>{link.label}</Link>
              )}
            </li>
          ))}
          <li>
            <MeetingButton text="REQUEST QUOTE" className="ml-2" />
          </li>
        </ul>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-base-100 shadow-lg p-4 z-50 lg:hidden">
          <ul className="menu menu-vertical w-full">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.children ? (
                  <details>
                    <summary>{link.label}</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      {link.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link href={child.href || ""}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={link.href || ""} onClick={toggleMenu}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-2">
              <MeetingButton
                text="REQUEST QUOTE"
                className="w-full"
                onClick={toggleMenu}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
