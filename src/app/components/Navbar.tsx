'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`glass-effect fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-800/98" : "bg-gray-800/95"}`}>
      <div className="flex justify-between items-center h-16 md:h-20 lg:h-24 px-5 sm:px-10 lg:px-20 text-white">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 logo-glow group">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto transition-all duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 2.5rem, 
                (max-width: 768px) 3rem, 
                (max-width: 1024px) 4rem, 
                (max-width: 1280px) 5rem, 
                6rem"
        />
      </a>

        {/* Navbar Links (Desktop) */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/shop" className="nav-link">Projects</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-circle-user text-2xl lg:text-3xl cursor-pointer user-icon"></i>
          <button className="hidden md:flex btn-gradient text-lg px-6 py-2 rounded-full font-semibold">Clique!</button>
          <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <span className={`hamburger-line ${menuOpen ? "hamburger-active" : ""}`}></span>
            <span className={`hamburger-line ${menuOpen ? "hamburger-active" : ""}`}></span>
            <span className={`hamburger-line ${menuOpen ? "hamburger-active" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-800/95 backdrop-blur-md text-white ${menuOpen ? "block mobile-menu-enter" : "hidden"}`}>
        <div className="p-5 space-y-2">
          <a href="/" className="mobile-nav-item block py-3 px-4 rounded-lg font-medium"><i className="fa-solid fa-home mr-3 text-green-500"></i>Home</a>
          <a href="/shop" className="mobile-nav-item block py-3 px-4 rounded-lg font-medium"><i className="fa-solid fa-shopping-bag mr-3 text-blue-500"></i>Shop</a>
          <a href="/about" className="mobile-nav-item block py-3 px-4 rounded-lg font-medium"><i className="fa-solid fa-info-circle mr-3 text-purple-500"></i>About</a>
          <a href="/contact" className="mobile-nav-item block py-3 px-4 rounded-lg font-medium"><i className="fa-solid fa-envelope mr-3 text-orange-500"></i>Contact</a>
          <div className="pt-4 border-t border-gray-600">
            <button className="btn-gradient w-full text-lg px-6 py-3 rounded-full font-semibold">Clique Aqui!</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
