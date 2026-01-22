"use client";

import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineEmail,  MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const contactData = [
  { icon: FaPhone, label: "070-000 00 00", href: "tel:0700000000" },
  { icon: MdOutlineEmail, label: "info@tantgredelin.se", href: "mailto:info@tantgredelin.se" },
  { icon: MdLocationOn, label: "Mjölby, Östergötland", href: "#" },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Kontakt */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-blush">Tant Gredelin</h3>
            <div className="space-y-2">
              {contactData.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="flex items-center gap-3 hover:text-blush transition-colors group">
                  <Icon className="w-5 h-5 group-hover:scale-110" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-blush">Följ oss</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-blush transition-transform hover:scale-110" aria-label="Facebook">
                <RiFacebookBoxFill />
              </a>
              <a href="#" className="hover:text-blush transition-transform hover:scale-110" aria-label="Instagram">
                <FaInstagramSquare />
              </a>
            </div>
          </div>

          {/* Tom placeholder för symmetri eller framtida länkar */}
          <div />
        </div>

        <hr className="border-white/20 my-8" />

        {/* Copyright */}
        <div className="text-center md:text-right text-midgray text-sm md:flex md:justify-between md:items-center">
          <p>© 2026 Tant Gredelin</p>
          <a href="https://kodochdesign.se" target="_blank" rel="noopener noreferrer" className="hover:text-blush underline">
            Kod och Design av Josefine Eriksson
          </a>
        </div>
      </div>
    </footer>
  );
}
