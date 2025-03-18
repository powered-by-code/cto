import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-200 py-4">

      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-primary">
          Logo
        </Link>
        <ThemeSwitcher />

      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex text-white">
          <li>
            <Link href="/services" className="btn btn-ghost hover:text-primary">
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="/industries" className="btn btn-ghost hover:text-primary">
              INDUSTRIES
            </Link>
          </li>
          <li>
            <Link href="/case-studies" className="btn btn-ghost hover:text-primary">
              CASE STUDIES
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="btn btn-ghost hover:text-primary">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/resources" className="btn btn-ghost hover:text-primary">
              RESOURCES
            </Link>
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
