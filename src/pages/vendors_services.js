import React, { useState } from "react";

const Service = () => {
  const [selectedService, setSelectedService] = useState("photographer"); // Default service

  const services = [
    { id: "latest", name: "Latest", content: "All the latest wedding trends.", image: "/Carepenter.jpg" },
    { id: "fashion", name: "Bridal Fashion", content: "Explore bridal fashion ideas.", image: "/Wedding.jpg" },
    { id: "planning", name: "Wedding Planning", content: "Best wedding planning tips.", image: "/Logo.png" },
    { id: "photo-video", name: "Photo & Video Ideas", content: "Creative wedding photography.", image: "/Dark1.jpg" },
    { id: "celebrity", name: "Celebrity", content: "Celebrity wedding insights.", image: "/BlackLogo.png" },
    { id: "decorating", name: "Decorating Ideas", content: "Beautiful decor ideas for weddings.", image: "/Catering.jpg" },
    { id: "pre-wedding", name: "Pre Wedding Planning", content: "Pre-wedding arrangements.", image: "/Dark2.jpg" },
    { id: "wedding-day", name: "Wedding Day", content: "Everything about wedding day prep.", image: "/Dark1.jpg" },
    { id: "hindu", name: "Hindu", content: "Hindu wedding traditions explained.", image: "/GreenLogo.png" },
    { id: "photographer", name: "Wedding Photographers", content: "Find professional photographers.", image: "/photographer.jpg" }
  ];

  const currentService = services.find((service) => service.id === selectedService);

  return (
    <section className="py-24 px-4 flex flex-col items-center">
      {/* Horizontal Scrollable Row */}
      <div className="flex gap-6 overflow-x-auto overflow-hidden whitespace-nowrap mb-8 max-w-full">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`flex flex-col items-center cursor-pointer  transition-transform duration-300 hover:scale-105 ${
              selectedService === service.id ? "text-CustomChocolate" : "text-gray-800"
            }`}
          >
            {/* Circular Image */}
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all ${
                selectedService === service.id
                  ? "border-CustomChocolate shadow-md"
                  : "border-gray-300"
              }`}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Card Title */}
            <span className="mt-2 text-sm font-semibold text-center">
              {service.name}
            </span>
          </div>
        ))}
      </div>

      {/* Selected Service Content */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-CustomChocolate">
          {currentService?.name}
        </h2>
        <p className="mt-2 text-gray-600">{currentService?.content}</p>
      </div>
    </section>
  );
};

export default Service;
