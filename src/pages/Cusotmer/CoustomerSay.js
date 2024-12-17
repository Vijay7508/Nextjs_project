import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Head from 'next/head'; // Importing next/head for SEO

const CustomerSay = () => {
  const testimonials = [
    {
      quote:
        "I found the perfect makeover artist for my wedding through WeddingBazaar.com. My wedding took place in Indore. Vinaya traveled here and her work was flawless. She styled my hair beautifully and did a fantastic job with the entire makeover.",
      name: "Harmeet Kaur",
      location: "Wedding Makeup, Indore",
    },
    {
      quote:
        "Aperture Art impressed me with their amazing photography skills. I made the right choice by selecting them for my marriage. Grateful to WeddingBazaar.com for suggesting the right people. They know what exactly to bring in front of you.",
      name: "S. Rahul",
      location: "Photography, Bangalore",
    },
    {
      quote:
        "The team of photographers recommended by WeddingBazaar.com surprised me with their approach to my portfolio. Their out-of-the-box thinking made the posing process exciting for me.",
      name: "Shatabdi",
      location: "Photography, Chennai",
    },
    {
      quote:
        "Thanks to WeddingBazaar.com, I found an amazing team of decorators who made my wedding venue look magical. Their professionalism and creativity were outstanding.",
      name: "Aarti Singh",
      location: "Event Decoration, Delhi",
    },
  ];

  return (
    <div>
      {/* SEO Meta Tags */}
      <Head>
        <title>What Our Customers Say | WeddingBazaar</title>
        <meta
          name="description"
          content="Read customer testimonials to see how WeddingBazaar helped them find the perfect wedding vendors like photographers, decorators, makeup artists, and more."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-gray-50 py-12">
        <div className="max-w-screen-xl mx-auto text-center italic">
          <h2 className="text-3xl font-bold text-gray-800 mb-8" aria-labelledby="testimonials">
            What our customers say
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-labelledby="testimonial-list">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
                role="listitem"
                aria-labelledby={`testimonial-${index}`}
              >
                <div className="text-pink-500 text-xl font-bold mb-4">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-700 italic mb-4" aria-describedby={`testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <h3 id={`testimonial-${index}`} className="text-gray-800 font-medium">{testimonial.name}</h3>
                <p className="text-gray-500" aria-label="Location">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
