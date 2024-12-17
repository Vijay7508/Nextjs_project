import React from "react";
import Head from "next/head"; // Importing next/head for SEO

const HelpUs = () => {
  return (
    <div>
      {/* Meta Tags for SEO */}
      <Head>
        <title>Help Us | Find Suitable Vendors</title>
        <meta
          name="description"
          content="Fill in your details and let us help you find the best vendors for photographers, carpenters, catering, and more."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-pink-50 py-20 mt-10 px-4 italic">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Help us with your details
          </h2>
          <p className="text-gray-600 mb-6">
            Our executives will call you to understand your requirements to find suitable vendors
          </p>

          <form className="flex flex-col md:flex-row justify-center gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 italic rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="sr-only">
                Mobile Number
              </label>
              <input
                id="mobile"
                type="text"
                placeholder="Enter mobile number"
                className="border border-gray-300 italic rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label htmlFor="vendor" className="sr-only">
                Search for Vendors
              </label>
              <select
                id="vendor"
                className="border border-gray-300 italic rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              >
                <option value="" disabled selected>
                  Search For Vendors
                </option>
                <option value="Photographers">Photographers</option>
                <option value="Wallpaper">Wallpaper</option>
                <option value="Carpenters">Carpenters</option>
                <option value="Caterers">Caterers</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-pink-600 italic text-white font-medium rounded-lg px-8 py-2 hover:bg-pink-900 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpUs;
