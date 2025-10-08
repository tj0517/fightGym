"use client";
import React, { useState } from "react";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Co trenujemy", href: "/co_trenujemy" },
  { label: "Grafik", href: "/grafik" },
  { label: "Kontakt", href: "/kontakt" },
];

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-6 flex justify-between items-center px-6 md:px-10 relative">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-orange-400">
        Fight<span className="text-white">Gym</span>
      </Link>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 list-none">
        {menuItems.map((item) => (
          <li key={item.href} className="hover:text-orange-400 transition">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl focus:outline-none"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black border-t border-stone-700 flex flex-col items-center gap-4 py-6 md:hidden z-50">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="text-lg hover:text-orange-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Menu;
