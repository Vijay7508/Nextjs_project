import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const menuRef = useRef(null); // Ref to the mobile menu
  const buttonRef = useRef(null); // Ref to the hamburger button

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Close the menu if a click is detected outside of the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the menu and the hamburger button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Detect clicks outside
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
    };
  }, []);

  return (
    <header>
      <nav
        className="bg-gradient-to-r from-CustomChocolate via-CustomChocolate to-LightCustom shadow-lg fixed top-0 left-0 w-full z-50"
        role="navigation"
        aria-label="Main Navigation"
      >
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
              <Link href="/" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm">
                Home
              </Link>
              <Link href="/about" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm">
                About Us
              </Link>
              <Link href="/vendors_services" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm">
                Services
              </Link>
              <Link href="/menu" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm">
                Menu
              </Link>
              <Link href="/gallery" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm">
                Gallery
              </Link>
              <Link href="/Testimonials" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm">
                Testimonials
              </Link>
              <Link href="/FAQs" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm">
                FAQs
              </Link>
              <Link href="/ContactUs" className="hover:text-black hover:bg-CustomWhite px-3 py-2 rounded-md text-sm">
                Contact Us
              </Link>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="flex items-center lg:hidden">
              <button
                ref={buttonRef}
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
      <div
        ref={menuRef}
        className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-CustomChocolate fixed top-16 left-0 right-0 z-40`}
      >
        <div className="flex flex-col space-y-1 px-4 py-8" role="menu" aria-label="Mobile Navigation">
          <Link href="/" className="text-white hover:bg-CustomWhite px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="text-white hover:bg-CustomWhite px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/vendors_services" className="text-white hover:bg-CustomWhite px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/menu" className="text-white hover:bg-CustomWhite px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
            Menu
          </Link>
          <Link href="/gallery" className="text-white hover:bg-CustomWhite px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link href="/Testimonials" className="text-white hover:bg-CustomWhite px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>
          <Link href="/FAQs" className="text-white hover:bg-CustomWhite px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
            FAQs
          </Link>
          <Link href="/ContactUs" className="text-white hover:bg-CustomWhite px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
