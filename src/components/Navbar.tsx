import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-primary">
          Logo
        </Link>
        <ThemeSwitcher />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/services">SERVICES</Link>
          </li>
          <li>
            <Link href="/industries">INDUSTRIES</Link>
          </li>
          <li>
            <Link href="/case-studies">CASE STUDIES</Link>
          </li>
          <li>
            <Link href="/about-us">ABOUT US</Link>
          </li>
          <li>
            <Link href="/resources">RESOURCES</Link>
          </li>
          <li>
            <Link href="/contact" className="btn btn-primary">
              REQUEST QUOTE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
