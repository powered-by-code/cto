import Link from "next/link";
import Image from "next/image";
import data from "@/data.json";

const Footer: React.FC = () => {
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
              className="btn btn-circle btn-sm bg-base-300 hover:bg-primary"
            >
              {/* SVG icons remain in the component since they're presentational */}
              {/* You can keep the existing SVG code for each social icon */}
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-6 text-sm flex-wrap">
          {data.footer.links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
