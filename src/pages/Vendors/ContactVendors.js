import React from 'react';
import Head from 'next/head'; 
import Link from 'next/link';


const ContactVendors = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Wedding Vendors | WeddingBazaar</title>
        <meta
          name="description"
          content="WeddingBazaar helps you plan your wedding with top vendors like photographers, decorators, makeup artists, and more. Hire the best wedding vendors today!"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-pink-50 flex justify-center items-center min-h-fit">
        <div className="max-w-4xl bg-pink-100 rounded-lg shadow-md p-8 text-center mt-20 md:mb-60 italic">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" aria-labelledby="title">
            Planning a wedding now made easy
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Helps plan your wedding like a loved one. WeddingBazaar is India's most loved and largest wedding services marketplace. Check prices, verified reviews, and book the best wedding photographers, bridal makeup artists, wedding venues, decorators, and all other wedding vendors at guaranteed best prices.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
            <a
              href="#"
              className="font-medium"
              aria-label="Explore vendors for your big day"
            >
              Explore vendors for your big day
            </a>
            <Link
  href="/vendors_services"
  className="bg-pink-600 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-pink-700"
  aria-label="Hire a vendor"
>
  Hire a vendor
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactVendors;
