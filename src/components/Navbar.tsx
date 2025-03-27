"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
import data from "@/data.json";
// const { meetingLink } = data;
import MeetingButton from "./MeetingButton";
import Image from "next/image";
import { MenuIcon, ChevronDown } from "lucide-react";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areDropdownsOpen, setAreDropdownsOpen] = useState(false);
  // Get meeting link from data.json
  // const meetingLink = data.meetingLink;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAllDropdowns = () => {
    setAreDropdownsOpen(!areDropdownsOpen);
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
    {
      href: "/resources",
      label: "RESOURCES",
      children: [
        { href: "/resources", label: "ARTICLES" },
        { href: "/case-studies", label: "CASE STUDIES" },
        { href: "/podcasts", label: "PODCASTS" },
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

      {/* Mobile menu button */}
      <div className="flex-none lg:hidden">
        <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>

      {/* Desktop menu */}
      <div className="flex-none hidden lg:block">
        <ul className="menu xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.children ? (
                <>
                  <button 
                    onClick={toggleAllDropdowns}
                    className="flex items-center justify-between"
                  >
                    {link.label}
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${
                        areDropdownsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {areDropdownsOpen && (
                    <ul className="bg-base-200 rounded-box p-2">
                      {link.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link href={child.href || ""}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
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
        <div className="fixed top-16 left-0 right-0 bg-base-200 shadow-lg p-4 z-50 lg:hidden">
          <ul className="menu menu-vertical w-full">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a>{link.label}</a>
                {link.children && (
                  <ul className="bg-base-200 rounded-box p-2">
                    {link.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link href={child.href || ""} onClick={toggleMenu}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
