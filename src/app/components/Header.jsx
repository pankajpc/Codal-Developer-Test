import { Search, User, ShoppingCart, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const mainNavLinks = [
    { label: "Browse Categories", href: "#" },
    { label: "Who We Serve", href: "#" },
    { label: "What We Do", href: "#" },
    { label: "Who We Are", href: "#" },
  ];

  const secondaryNavLinks = [
    { label: "Lubricants", href: "/lubricants" },
    { label: "Chemicals", href: "/chemicals" },
    { label: "Supplies", href: "/supplies" },
    { label: "Equipment", href: "/equipment" },
    { label: "Auto Parts", href: "/auto-parts" },
    { label: "Purchased Products", href: "/purchased-products" },
  ];

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">
            IPSUM
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {mainNavLinks.map((link) => (
              <div key={link.label} className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300">
                  <span>{link.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            ))}
          </nav>
          <button
            className="md:hidden p-2 hover:bg-gray-800 rounded-full"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search by keyword, brand or SKU..."
                className="w-64 bg-gray-900 border border-gray-700 rounded-md py-2 px-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Search"
              >
                <Search className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <button
              className="p-2 hover:bg-gray-800 rounded-full"
              aria-label="User Profile"
            >
              <User className="h-5 w-5" />
            </button>
            <button
              className="p-2 hover:bg-gray-800 rounded-full"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-gray-800 text-white p-4 space-y-2">
            {mainNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block hover:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
        <nav className="border-t border-gray-800">
          <ul className="flex space-x-8 py-3 text-sm">
            {secondaryNavLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-gray-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
