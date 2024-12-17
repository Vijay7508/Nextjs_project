import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head"; // Import Head for SEO

const FAQs = () => {
  // FAQ data
  const faqData = [
    {
      question: "What is WeddingBazaar?",
      answer:
        "WeddingBazaar is India's leading online wedding planning platform that helps you book the best wedding vendors, get inspiration, and plan your wedding seamlessly.",
    },
    {
      question: "How can I book a vendor on WeddingBazaar?",
      answer:
        "You can book wedding vendors directly through our platform. Simply browse through our vendor list, check reviews, and make bookings.",
    },
    {
      question: "Are the wedding vendors verified?",
      answer:
        "Yes, all vendors listed on WeddingBazaar are thoroughly verified and come with ratings and reviews from real customers.",
    },
    {
      question: "Can I get a customized wedding plan?",
      answer:
        "Absolutely! We offer personalized wedding planning services through our team of experts to ensure your wedding is exactly how you envision it.",
    },
    {
      question: "Do you provide international vendors?",
      answer:
        "Currently, WeddingBazaar operates within India, but we are expanding and will soon feature international vendors.",
    },
  ];

  // State to manage the expanded question
  const [expanded, setExpanded] = useState(null);

  // Toggle the selected question
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="mt-12">
      {/* SEO Meta Tags */}
      <Head>
        <title>Frequently Asked Questions | WeddingBazaar</title>
        <meta
          name="description"
          content="Find answers to your most common questions about WeddingBazaar, from booking vendors to personalized wedding plans."
        />
        <meta name="robots" content="index, follow" />
        {/* JSON-LD Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqData.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            }),
          }}
        />
      </Head>

      {/* Main Content */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Frequently Asked Questions
          </h1>

          {/* FAQ Accordion Section */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  className="w-full text-left p-5 text-xl font-semibold text-gray-800 bg-gray-100 rounded-t-md"
                  onClick={() => toggleExpand(index)}
                >
                  {faq.question}
                </button>
                {expanded === index && (
                  <div className="p-5 text-lg text-gray-600 bg-gray-50 rounded-b-md">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
