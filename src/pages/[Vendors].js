import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const VendorsPage = () => {
  const router = useRouter();
  const { Vendors } = router.query; // Get the dynamic vendor name from the URL
  const [vendorData, setVendorData] = useState(null);

  useEffect(() => {
    if (Vendors) {
      setVendorData(Vendors.toLowerCase()); // Normalize case for matching
    }
  }, [Vendors]);

  if (!vendorData) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  // Content for each vendor
  const vendorDetails = {
    photographers: {
      title: "Best Photographers in Your City",
      description:
        "See the list of the best photographers for weddings, birthdays, and corporate events. Find premium and budget photographers to suit your needs and capture your special moments beautifully.",
    },
    wallpaperspecialists: {
      title: "Stylish Wallpaper Designs",
      description:
        "Explore a wide range of wallpapers for every room. From classic to modern, redefine your interiors with our premium and budget-friendly options.",
    },
    carpenters: {
      title: "Expert Carpentry Services",
      description:
        "Discover skilled carpenters for custom furniture, home renovations, and more. Affordable, professional, and reliable solutions tailored to your requirements.",
    },
    caterers: {
      title: "Delicious Catering Services",
      description:
        "Find the best catering services for weddings, parties, and corporate events. Browse premium and budget caterers to ensure your event is a success.",
    },
  };

  const currentVendor = vendorDetails[vendorData] || {
    title: "Vendor Not Found",
    description: "We couldn’t find the vendor you’re looking for. Please check the URL and try again.",
  };

  return (
    <div className="mt-10 px-6 sm:px-12 lg:px-20">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-4">
        <span
          onClick={() => router.push("/")}
          className="cursor-pointer hover:underline"
        >
          Home
        </span>
        <span className="mx-2">/</span>
        <span className="text-pink-600 capitalize">{vendorData}</span>
      </div>

      {/* Title and Description */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
        {currentVendor.title} <span className="text-pink-600">(123454+)</span>
      </h1>
      <p className="text-gray-600 md:text-lg leading-relaxed mb-6">
        {currentVendor.description}
      </p>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 justify-start items-center">
        <button className="flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:bg-gray-200 transition">
          Budget <span>&#x25BE;</span>
        </button>
        <button className="flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:bg-gray-200 transition">
          Ratings <span>&#x25BE;</span>
        </button>
        <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:bg-gray-200 transition">
          Shortlisted
        </button>
        <button className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full shadow hover:bg-pink-700 transition">
          <span className="text-lg">&#x2699;</span> Filters
        </button>
      </div>
    </div>
  );
};

export default VendorsPage;
