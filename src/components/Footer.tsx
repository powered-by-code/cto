import Link from "next/link";
import Image from "next/image";
import data from "@/data.json";
import { navLinks } from "@/lib/navLinks";
import { Youtube, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  // Calculate the number of columns based on navLinks length
  const columnClass = `grid-cols-1 ${
    navLinks.length === 2 ? 'md:grid-cols-2' :
    navLinks.length === 3 ? 'md:grid-cols-3' :
    navLinks.length === 4 ? 'md:grid-cols-4' :
    navLinks.length >= 5 ? 'md:grid-cols-4 lg:grid-cols-5' : ''
  }`;

  return (
    <footer className="py-12 border-t border-gray-800 bg-base-200">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <div className="text-2xl font-bold text-primary">
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
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {data.footer.socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="btn btn-lg btn-circle bg-base-300 hover:bg-secondary"
            >
              {link.name === "YouTube" && <Youtube size={24} />}
              {link.name === "LinkedIn" && <Linkedin size={24} />}
              {link.name === "Instagram" && <Instagram size={24} />}
              {link.name === "Facebook" && <Facebook size={24} />}
              {link.name === "Twitter" && <Twitter size={24} />}
            </Link>
          ))}
        </div>

        <div className={`grid ${columnClass} gap-8 max-w-6xl mx-auto px-4`}>
          {navLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              
                <Link
                  href={section.href || ''}
                  className="text-sm font-bold hover:text-primary"
                >
                  {section.label}
                </Link>

              {section.children && (
                <div className="flex flex-col gap-2">
                  {section.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.href || ''}
                      className="text-sm hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
