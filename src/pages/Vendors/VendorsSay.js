import React from 'react';
import Head from 'next/head'; // Importing next/head for SEO

const VendorsSay = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Head>
        <title>Vendor Testimonials | WeddingBazaar</title>
        <meta
          name="description"
          content="Read testimonials from WeddingBazaar vendors who have experienced business growth with our platform. Join us today to double your business."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-pink-50 py-10 px-5 italic">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4" aria-labelledby="vendors-testimonial">
            Our vendors have generated 100 Crore business last month!
          </h2>
          <p className="text-gray-600 text-sm md:text-lg mb-10" aria-describedby="testimonial-description">
            Here are some of our vendor testimonials
          </p>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-labelledby="testimonial-list">
            {/* Card 1 */}
            <div
              className="bg-white rounded-lg shadow p-6"
              role="listitem"
              aria-labelledby="testimonial-1"
            >
              <p className="text-pink-600 text-3xl mb-4" aria-hidden="true">❝</p>
              <p className="text-gray-600 text-sm md:text-base mb-4" aria-describedby="testimonial-1-quote">
                "When I registered here as a verified vendor, I did not know that my business would improve vastly within a short period. Understanding the requirements of the customers and serving them has helped develop my business widely. My sincere thanks to the WeddingBazaar team for providing me with leads and support consistently."
              </p>
              <h4 id="testimonial-1" className="font-bold text-gray-800">Varun</h4>
              <p className="text-gray-600 text-sm">Caterers, Chennai</p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white rounded-lg shadow p-6"
              role="listitem"
              aria-labelledby="testimonial-2"
            >
              <p className="text-pink-600 text-3xl mb-4" aria-hidden="true">❝</p>
              <p className="text-gray-600 text-sm md:text-base mb-4" aria-describedby="testimonial-2-quote">
                "I took the most popular package on WeddingBazaar and it is totally useful. For beginners like me, it would be very helpful to have a support like WeddingBazaar to get more clients. I would recommend this platform to everyone looking to grow their business quickly."
              </p>
              <h4 id="testimonial-2" className="font-bold text-gray-800">Hemavathy</h4>
              <p className="text-gray-600 text-sm">Makeup Artist, Hyderabad</p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white rounded-lg shadow p-6"
              role="listitem"
              aria-labelledby="testimonial-3"
            >
              <p className="text-pink-600 text-3xl mb-4" aria-hidden="true">❝</p>
              <p className="text-gray-600 text-sm md:text-base mb-4" aria-describedby="testimonial-3-quote">
                "Grateful to the WeddingBazaar team. As a registered vendor, I connected with a lot of new clients. Doubling the business as a Mehndi artist with the help of WeddingBazaar was so easy. Not only as a vendor, I also used WeddingBazaar as a customer and was highly satisfied with their personalized vendor suggestions."
              </p>
              <h4 id="testimonial-3" className="font-bold text-gray-800">Parvathy</h4>
              <p className="text-gray-600 text-sm">Mehndi Artist, Chennai</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-10 lg:flex" role="region" aria-labelledby="cta">
            <h3 id="cta" className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Become a vendor in WeddingBazaar! Double your business
            </h3>
            <a
              href="#"
              className="bg-pink-600 text-white text-sm md:text-base lg:ml-80 font-bold py-2 px-6 rounded shadow hover:bg-pink-700 transition"
              aria-label="Register as Vendor"
            >
              Register as Vendor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorsSay;
