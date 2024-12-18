import React, { useState } from 'react';
import { MdVerified } from "react-icons/md";
import Different from './Different';
import { motion } from 'framer-motion';
import Head from 'next/head'; // Importing next/head for SEO

const ContactUs = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setMessage(""); // Clear the form after submission
  };

  return (
    <div>
      {/* SEO Meta Tags */}
      <Head>
        <title>Us Us | WeddingBazaar</title>
        <meta
          name="description"
          content="Get in touch with WeddingBazaar for your wedding planning needs. Reach out to our team for any queries or assistance."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-gray-50 py-16 mt-10 italic px-4 text-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-center mb-8" aria-labelledby="contact-title">
            Contact Us
          </h1>

          <p className="text-lg mb-4">
            Have any questions or need assistance with planning your wedding? We're here to help! Feel free to reach out to us, and we'll get back to you as soon as possible.
          </p>

          <p className="text-lg mb-4">
            You can contact us via email, phone, or simply fill out the form below. We look forward to helping you plan your dream wedding.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Write your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-medium py-2 px-16 rounded-lg shadow hover:bg-pink-700"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="container mx-auto mt-20 max-w-4xl">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MdVerified className="text-pink-500 text-2xl" />
            <h2 className="text-2xl font-bold">Trusted Wedding Vendors</h2>
          </div>
          <p className="text-sm mb-4">
            WeddingBazaar is the leading wedding planning platform in India, providing you with verified wedding vendors and the best services. Whether you need help with photographers, venues, decorators, or makeup artists, we are here to guide you every step of the way.
          </p>
        </div>

        <div className="flex flex-col md: md:justify-between mt-8 items-center gap-4">
          <a
            href="#"
            className="bg-pink-600 text-white font-medium py-2 px-16 rounded-lg shadow hover:bg-pink-700"
          >
            Hire a vendor
          </a>
        </div>
        <Different />
      </div>
    </div>
  );
};

export default ContactUs;
