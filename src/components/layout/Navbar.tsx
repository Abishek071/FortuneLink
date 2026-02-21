// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Founder's Message", href: "/message/" },
  { name: "Sole Clients", href: "/clients/" },
  { name: "Our Team", href: "/team/" },
  { name: "Services", href: "/services/" },
];

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-16 h-12 relative">
                <Image
                  src="/logo.webp"
                  alt="Fortune Link Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-lg hidden lg:block tracking-tight text-secondary">
                Fortune Link Solutions Pvt. Ltd.
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`hover:text-secondary transition-colors ${
                    path === link.href ? "text-secondary font-bold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => router.push("/contact")}
                className="bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary/70 transition-all shadow-md cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU SYSTEM --- */}

        {/* Overlay (Darkens the background) */}
      </nav>
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-60 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 h-full w-[280px] bg-white z-[70] md:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="p-6 flex justify-between items-center border-b border-slate-50">
            <span className="font-bold text-slate-900">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X size={20} className="text-slate-500" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium p-3 rounded-xl transition-all ${
                    path === link.href
                      ? "bg-blue-50 text-secondary"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Footer CTA */}
          <div className="p-6 border-t border-slate-50">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/contact");
              }}
              className="w-full bg-secondary text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
