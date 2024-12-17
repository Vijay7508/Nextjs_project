import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const menuRef = useRef(null); // Ref to the mobile menu to check if the click is inside

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the menu if a click is detected outside of the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(); // Close menu if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Detect clicks outside
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
    };
  }, []);

  return (
    <header>
      {/* Meta Tags for SEO */}
      <nav className="bg-gradient-to-r from-CustomChocolate via-CustomChocolate to-LightCustom shadow-lg fixed top-0 left-0 w-full z-50" role="navigation" aria-label="Main Navigation">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-fixed">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <h1 className="text-white text-2xl font-bold" aria-label="Website Logo">
                Logo
              </h1>
            </div>

            {/* Centered Links */}
            <div className="hidden lg:flex justify-center items-center flex-1 space-x-8 text-white font-bold">
              <Link href="/" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm" aria-label="Home">Home</Link>
              <Link href="/about" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm" aria-label="About Us">About Us</Link>
              <Link href="/services" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm" aria-label="Services">Services</Link>
              <Link href="/menu" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm" aria-label="Menu">Menu</Link>
              <Link href="/gallery" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm" aria-label="Gallery">Gallery</Link>
              <Link href="/Testimonials" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm" aria-label="Testimonials">Testimonials</Link>
              <Link href="/FAQs" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm" aria-label="FAQs">FAQs</Link>
              <Link href="/ContactUs" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm" aria-label="Contact Us">Contact Us</Link>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-CustomChocolate fixed top-16 left-0 right-0 z-40`}>
        <div className="flex flex-col space-y-1 px-4 py-8" role="menu" aria-label="Mobile Navigation">
          <Link href="/" className="text-white hover:bg-CustomWhite px-3 py-2 rounded-md text-sm font-medium" aria-label="Home" onClick={closeMenu}>Home</Link>
          <Link href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium" aria-label="About Us" onClick={closeMenu}>About Us</Link>
          <Link href="/services" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium" aria-label="Services" onClick={closeMenu}>Services</Link>
          <Link href="/menu" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium" aria-label="Menu" onClick={closeMenu}>Menu</Link>
          <Link href="/gallery" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium" aria-label="Gallery" onClick={closeMenu}>Gallery</Link>
          <Link href="/Testimonials" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium" aria-label="Testimonials" onClick={closeMenu}>Testimonials</Link>
          <Link href="/FAQs" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium" aria-label="FAQs" onClick={closeMenu}>FAQs</Link>
          <Link href="/ContactUs" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium" aria-label="Contact Us" onClick={closeMenu}>Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
