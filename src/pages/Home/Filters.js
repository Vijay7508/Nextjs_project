import React from "react";
import Head from "next/head";

const Filters = () => {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>India's Leading Platform for Elite Services | Filters</title>
        <meta
          name="description"
          content="Connect with top professionals in photography, wallpaper, carpentry, catering, and more across India. Simplify your search for elite services with our platform."
        />
        <meta name="keywords" content="Elite Services, Photography, Carpentry, Catering, Wallpaper, Professionals" />
        <meta name="author" content="Elite Services Hub" />
      </Head>

      <section className="text-white font-bold text-center mx-auto px-4 italic">
        <header>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            India's Leading Platform for{" "}
            <span className="text-CustomChocolate">Elite Services Hub</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4">
            Connect with Top Professionals for Photography, Wallpaper, Carpentry, Catering, and Beyond!
          </p>
        </header>

        <div className="bg-CustomChocolate p-4 rounded-lg shadow-lg mt-8">
          <form className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {/* Wedding Service Dropdown */}
            <div className="flex-1">
              <label htmlFor="wedding-select" className="block text-white text-lg font-bold mb-2">
                Select Wedding Service:
              </label>
              <select
                id="wedding-select"
                name="wedding-service"
                className="w-full italic bg-white text-black text-lg font-semibold px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
                aria-label="Select a wedding service"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a service
                </option>
                <option value="photography">Photography</option>
                <option value="wallpaper">Wallpaper</option>
                <option value="carpentry">Carpentry</option>
                <option value="catering">Catering</option>
              </select>
            </div>

            {/* City Dropdown */}
            <div className="flex-1">
              <label htmlFor="city-select" className="block text-white text-lg font-bold mb-2">
                Select City:
              </label>
              <select
                id="city-select"
                name="city"
                className="w-full bg-white italic hover:bg-gray-100 text-black text-lg font-semibold px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
                aria-label="Select a city"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a city
                </option>
                <option value="chandigarh">Chandigarh</option>
                <option value="panchkula">Panchkula</option>
                <option value="mohali">Mohali</option>
              </select>
            </div>
          </form>

          <div className="mt-4 sm:mt-8 text-center">
            <button
              type="submit"
              className="italic bg-gradient-to-r from-CustomWhite via-CustomWhite to-CustomWhite text-CustomChocolate hover:text-white hover:from-gray-200 hover:to-gray-700 font-bold text-lg px-6 py-2 rounded-lg shadow-lg transition-transform transform"
              aria-label="Search for services"
            >
              Find
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filters;
