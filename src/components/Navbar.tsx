"use client";
import Link from "next/link";
import { useState } from "react";
import data from "@/data.json";
// const { meetingLink } = data;
import MeetingButton from "./MeetingButton";
import Image from "next/image";
import { MenuIcon, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navLinks";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="drawer drawer-end">
      <input 
        id="navbar-drawer" 
        type="checkbox" 
        className="drawer-toggle" 
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      
      <div className="drawer-content">
        {/* Main Navbar Content */}
        <div className="navbar bg-base-100 shadow-sm items-center py-0 px-6">
          <div className="flex-1" id="navbar-logo-title">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-xl font-bold text-primary flex items-center gap-2"
              >
                <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                {data.companyName}
              </Link>
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
            <ul className="menu menu-horizontal  xl:min-w-max whitespace-nowrap">
              {navLinks.map((link, index) => (
                <li key={index} className="dropdown dropdown-hover dropdown-end">
                  {link.children ? (
                    <>
                      <div
                        role="button"
                        className={`flex items-center justify-between hover:bg-base-300 whitespace-nowrap ${
                          link.children.some((child) => isActive(child.href || ""))
                            ? "text-primary font-bold"
                            : ""
                        }`}
                      >
                        <div className="whitespace-nowrap">
                          {link.label}
                        </div>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </div>
                      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box whitespace-nowrap mt-1!">
                        {link.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              href={child.href || ""}
                              className={`hover:bg-base-300 whitespace-nowrap px-5 ${
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
                    </>
                  ) : (
                    <Link
                      href={link.href || ""}
                      className={`hover:bg-base-300 whitespace-nowrap ${
                        isActive(link.href || "") ? "text-primary font-bold" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <MeetingButton text="REQUEST QUOTE" className="ml-2 whitespace-nowrap" />
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
              {link.children ? (
                <a
                  className={`hover:bg-base-300 ${
                    isActive(link.href || "") ? "text-primary font-bold" : ""
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href || ""}
                  onClick={toggleMenu}
                  className={`hover:bg-base-300 ${
                    isActive(link.href || "") ? "text-primary font-bold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )}
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

