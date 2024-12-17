import React from "react";
import { FaFacebook, FaTwitter, FaPinterestSquare, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdPhone, MdEmail } from "react-icons/md";
import { motion } from "framer-motion"; // For adding animations

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Column 1: Company Information */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <motion.h2
            className="text-4xl font-bold text-white mb-4 hover:text-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            WeddingBazaar
          </motion.h2>
          <p className="text-lg text-gray-300">
            Your trusted partner for all things wedding. We make planning your wedding fun, easy, and memorable.
          </p>
        </div>

        {/* Footer Column 2: Quick Links */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <motion.a
                href="/"
                className="hover:text-pink-200 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/about"
                className="hover:text-pink-200 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                About Us
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/services"
                className="hover:text-pink-200 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Services
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/contact"
                className="hover:text-pink-200 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Contact Us
              </motion.a>
            </li>
          </ul>
        </div>

        {/* Footer Column 3: Contact Information */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start">
              <MdPhone className="text-pink-300 mr-2" />
              <span className="text-gray-200">+1 234 567 890</span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <MdEmail className="text-pink-300 mr-2" />
              <span className="text-gray-200">support@weddingbazaar.com</span>
            </li>
          </ul>
        </div>

        {/* Footer Column 4: Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Follow Us</h3>
          <div className="flex space-x-6 text-3xl justify-center md:justify-start">
            <motion.a
              href="#"
              className="text-blue-600 hover:text-pink-200"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="#"
              className="text-pink-500 hover:text-pink-200"
              whileHover={{ scale: 1.2 }}
            >
              <FiInstagram />
            </motion.a>
            <motion.a
              href="#"
              className="text-[#1DA1F2] hover:text-pink-200"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              className="text-red-600 hover:text-pink-200"
              whileHover={{ scale: 1.2 }}
            >
              <FaPinterestSquare />
            </motion.a>
            <motion.a
              href="#"
              className="text-[#0077B5] hover:text-pink-200"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; 2024 WeddingBazaar. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
