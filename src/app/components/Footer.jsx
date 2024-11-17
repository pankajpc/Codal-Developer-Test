import { Facebook, Twitter, Instagram } from "lucide-react";

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="hover:text-white">
      {children}
    </a>
  </li>
);

const FooterSection = ({ title, children }) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-2 text-sm text-[#9CA3AF]">{children}</ul>
  </div>
);

export default function Footer() {
  const productLinks = [
    { href: "#", label: "Lubricants" },
    { href: "#", label: "Chemicals" },
    { href: "#", label: "Equipment" },
  ];

  const companyLinks = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Contact" },
    { href: "#", label: "Careers" },
  ];

  return (
    <footer className="bg-[#1F2937] border-t border-[#374151] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">IPSUM</h3>
            <p className="text-sm text-[#9CA3AF]">
              All rights reserved. © 2024
            </p>
          </div>
          <FooterSection title="Products">
            {productLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterSection>
          <FooterSection title="Company">
            {companyLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterSection>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#9CA3AF] hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-[#9CA3AF] hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-[#9CA3AF] hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
