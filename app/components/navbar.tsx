"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#hem", label: "Hem" },
  { href: "#produkter", label: "Produkter" },
  { href: "#omoss", label: "Om oss" },
  { href: "#hittahit", label: "Hitta hit" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && e.target instanceof Node && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center text-black text-3xl gap-3">Tant Gredelin</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex text-gray-700 gap-6 font-heading text-lg">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-warmbrown transition-colors">
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black text-2xl" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Meny"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div ref={menuRef} className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-4 text-gray-700 font-heading text-lg">
            {navLinks.map(({ href, label }) => (
              <a 
                key={href} 
                href={href} 
                onClick={() => setMobileOpen(false)}
                className="hover:text-warmbrown transition-colors py-2"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
