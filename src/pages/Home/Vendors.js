import React from "react";
import Head from "next/head"; 
import { useRouter } from "next/router";


const Vendors = () => {
    const router = useRouter();
  
  const vendors = [
    { name: "Photographers", description: "Capture your precious moments.", count: "2000+", image: "/Dark1.jpg" },
    { name: "Wallpaper Specialists", description: "Transform your walls with style.", count: "2000+", image: "/Dark2.jpg" },
    { name: "Carpenters", description: "Crafting furniture with perfection.", count: "2000+", image: "/Carepenter.jpg" },
    { name: "Caterers", description: "Delicious food for every occasion.", count: "2000+", image: "/Catering.jpg" },
  ];
  const handleVendorClick = (vendorName) => {
    const route = vendorName.toLowerCase().replace(/\s+/g, "");
    router.push(`/${route}`);
  };

  return (
    <div>
      {/* SEO Meta Tags */}
      <Head>
        <title>Our Vendors | Elite Services Hub</title>
        <meta
          name="description"
          content="Explore a wide range of vendors offering photography, wallpaper, carpentry, catering, and more to meet your needs."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-fit italic p-8 mt-40 sm:mt-0">
        <h1 className="text-3xl font-bold text-center mb-8">Our Vendors</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 w-full sm:w-60 md:w-64 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-200"
              aria-labelledby={`vendor-${index}`}
              onClick={() => handleVendorClick(vendor.name)} // Handle click to navigate

            >
              <img
                src={vendor.image}
                alt={`Image of ${vendor.name}`}
                className="w-24 h-24 rounded-full mb-4 object-cover"
                aria-hidden="true"
              />
              <h2 id={`vendor-${index}`} className="text-xl font-semibold mb-2">
                {vendor.name}
              </h2>
              <p className="text-gray-600 text-sm">{vendor.description}</p>
              <p className="text-green-600 font-bold mt-2">{vendor.count} Vendors</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendors;
