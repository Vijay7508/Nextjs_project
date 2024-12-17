import React from 'react';
import { motion } from 'framer-motion'; // For animations

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      name: "Sara & John",
      role: "Happy Couple",
      text: "WeddingBazaar helped us plan our dream wedding! The process was easy, and the team was incredibly helpful. We couldn't be happier with the results. Highly recommend!",
    },
    {
      name: "Emily",
      role: "Bride",
      text: "I loved the variety of vendors and their expert suggestions. Everything turned out beautifully!",
    },
    {
      name: "Michael",
      role: "Groom",
      text: "Thanks to WeddingBazaar, my wedding was everything I imagined. Highly recommended!",
    },
    {
      name: "Priya & Raj",
      role: "Happy Couple",
      text: "The wedding planning was stress-free and we had the best vendors! Thank you WeddingBazaar for making our wedding so special.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4" id="testimonials">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
