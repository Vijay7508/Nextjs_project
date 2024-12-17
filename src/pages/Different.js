import React from "react";
import { FaFacebook, FaTwitter, FaPinterestSquare, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Head from "next/head"; // Importing next/head for SEO

const Different = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Head>
        <title>What Makes Us Different? | WeddingBazaar</title>
        <meta
          name="description"
          content="Discover what makes WeddingBazaar unique for customers and vendor partners. Read about our assisted wedding planning, tech-driven solutions, and vendor support services."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="p-6 bg-gray-50 mt-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8" aria-labelledby="different-title">
          What Makes Us Different?
        </h1>

        {/* For Couples Section */}
        <div className="section mb-10" role="region" aria-labelledby="customer-section">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 justify-center" id="customer-section">
            For Customer
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-red-500 mr-3">❤️</span>
              <p>
                <strong>Assisted Wedding Planning</strong> - A personal wedding manager to solve all your booking queries & negotiate with vendors to get the best deal for you.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3">❤️</span>
              <p>
                <strong>State-of-art technology</strong> - To get the best ideas & perfectly matched vendors as per your requirements & budget.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3">❤️</span>
              <p>
                <strong>Trust & Reliability in services</strong> - Established through verified vendors, backup assurance & dispute resolution.
              </p>
            </li>
          </ul>
        </div>

        {/* For Vendor Partners Section */}
        <div className="section" role="region" aria-labelledby="vendor-partners-section">
          <h2 className="text-xl font-semibold text-gray-700 mb-4" id="vendor-partners-section">
            For Vendor Partners
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-500 mr-3">❤️</span>
              <p>
                <strong>Predictable business</strong> - Through enhanced algorithms matching customer demands in various requirements-budget ranges with available vendor supply round the year.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3">❤️</span>
              <p>
                <strong>Boost business through technology</strong> - CRM tools to help you focus on the most important customers and improve booking conversions, building a mutually fulfilling relationship with WeddingBazaar.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3">❤️</span>
              <p>
                <strong>Focus on creative work</strong> - We get all the unproductive stuff done for you so that you can focus on improving customer’s experience through your creative excellence!
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:justify-between mt-8 items-center gap-4">
          <a
            href="#"
            className="bg-pink-600 text-white font-medium py-2 px-16 rounded-lg shadow hover:bg-pink-700"
            aria-label="Register as a vendor"
          >
            Register as a vendor
          </a>
        </div>

        <div className="bg-pink-50 py-20 mt-10 italic">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <h3 className="text-2xl font-bold">Who we are</h3>
            </div>
            <p className="text-sm mb-4">
              We are <strong>passionate</strong>. We drive change. We move <strong>fast</strong>. We love to <strong>win</strong>. We value our <strong>team</strong>. We are supportive. We are <strong>kind</strong>. We are <strong>optimistic</strong>. We are <strong>creative</strong>. We <strong>collaborate</strong>. We say <strong>cheers</strong>.
            </p>
          </div>
          <h3 className="text-center text-md">We are <strong>CompanyName</strong>.</h3>
        </div>

        
       
      </div>
    </div>
  );
};

export default Different;
