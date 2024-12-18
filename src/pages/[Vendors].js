import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import vendorList from "./VendorData"; // Import your vendor data

const VendorsPage = () => {
  const router = useRouter();
  const { Vendors } = router.query; // Get the dynamic vendor name from the URL
  const [vendorCategory, setVendorCategory] = useState(null);

  useEffect(() => {
    if (Vendors) {
      setVendorCategory(Vendors.toLowerCase()); // Normalize case for matching
    }
  }, [Vendors]);

  if (!vendorCategory) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  // Content for each vendor category
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

  const currentVendor = vendorDetails[vendorCategory] || {
    title: "Vendor Not Found",
    description:
      "We couldn’t find the vendor you’re looking for. Please check the URL and try again.",
  };

  // Filter vendor data based on the category
  const filteredVendors = vendorList.filter(
    (vendor) => vendor.category === vendorCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-pink-100 to-pink-50 italic">
      {/* White Content Area */}
      <div className="w-full bg-white shadow-lg py-12 px-6 sm:px-12 lg:px-20">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-4">
          <span
            onClick={() => router.push("/")}
            className="cursor-pointer hover:underline"
          >
            Home
          </span>
          <span className="mx-2">/</span>
          <span className="text-pink-600 capitalize">{vendorCategory}</span>
        </div>

        {/* Title and Description */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-800">
            {currentVendor.title}{" "}
            <span className="text-pink-600">(1000+)</span>
          </h1>
          <p className="text-gray-600 md:text-lg leading-relaxed mb-6">
            {currentVendor.description}
          </p>
        </div>
      </div>

      {/* Vendor Cards */}
      <div className="py-12 px-6 sm:px-12 lg:px-20 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg">
          {filteredVendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full sm:w-72 lg:w-60"
            >
              {/* Vendor Image */}
              <div className="relative w-full h-36">
                <img
                  src={vendor.image}
                  alt={vendor.shopName}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">
                  ⭐ {vendor.rating}
                </span>
              </div>
              {/* Vendor Details */}
              <div className="p-2 text-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  {vendor.shopName}
                </h3>
                <p className="text-xs text-gray-500">{vendor.cityName}</p>
                <p className="text-sm font-medium text-pink-600 mt-1">
                  {vendor.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;
