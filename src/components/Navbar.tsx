"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
import data from "@/data.json";
// const { meetingLink } = data;
import MeetingButton from "./MeetingButton";
import Image from "next/image";
import { MenuIcon, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
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

  const isActive = (href: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
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
    <div className="drawer">
      <input 
        id="navbar-drawer" 
        type="checkbox" 
        className="drawer-toggle" 
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      
      <div className="drawer-content">
        {/* Main Navbar Content */}
        <div className="navbar bg-base-100 shadow-sm items-start py-2">
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
          <div className="flex-none xl:hidden">
            <label htmlFor="navbar-drawer" className="btn btn-square btn-ghost">
              <MenuIcon />
            </label>
          </div>

          {/* Desktop menu */}
          <div className="flex-none hidden xl:block">
            <ul className="menu menu-horizontal bg-base-200 rounded-box xl:min-w-max">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.children ? (
                    <>
                      <button
                        onClick={toggleAllDropdowns}
                        className={`flex items-center justify-between hover:bg-base-300 ${
                          link.children.some((child) => isActive(child.href || ""))
                            ? "text-primary font-bold"
                            : ""
                        }`}
                      >
                        <div>
                          {link.label}
                          {/* find the child with the longest label */}
                          {/* and use that as the width of the button */}
                          <div className="h-0 opacity-0 -mt-4 overflow-hidden p-2">
                            {
                              link.children.find(
                                (child) =>
                                  child.label.length ===
                                  Math.max(
                                    ...link.children.map(
                                      (child) => child.label.length
                                    )
                                  )
                              )?.label
                            }
                          </div>
                        </div>

                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            areDropdownsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {areDropdownsOpen && (
                        <ul className="bg-base-200 rounded-box p-2">
                          {link.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <Link
                                href={child.href || ""}
                                className={`hover:bg-base-300 ${
                                  isActive(child.href || "")
                                    ? "text-primary font-bold"
                                    : ""
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href || ""}
                      className={`hover:bg-base-300 ${
                        isActive(link.href || "") ? "text-primary font-bold" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <MeetingButton text="REQUEST QUOTE" className="ml-2" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Drawer Side */}
      <div className="drawer-side z-50">
        <label 
          htmlFor="navbar-drawer" 
          aria-label="close sidebar" 
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                className={`hover:bg-base-300 ${
                  isActive(link.href || "") ? "text-primary font-bold" : ""
                }`}
              >
                {link.label}
              </a>
              {link.children && (
                <ul className="bg-base-200 rounded-box p-2">
                  {link.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link
                        href={child.href || ""}
                        onClick={toggleMenu}
                        className={`hover:bg-base-300 ${
                          isActive(child.href || "")
                            ? "text-primary font-bold"
                            : ""
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="mt-4">
            <MeetingButton
              text="REQUEST QUOTE"
              className="w-full"
              onClick={toggleMenu}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
