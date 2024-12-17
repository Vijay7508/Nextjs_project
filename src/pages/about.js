import React, { useState, useEffect } from 'react';
import { MdVerified } from "react-icons/md";
import Different from './Different';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head'; // Importing next/head for SEO


const useCounter = (targetValue, duration) => {
    const [counter, setCounter] = useState(0);
    

    useEffect(() => {
        let start = 0;
        const increment = targetValue / (duration / 10); // Calculate increment per step

        const interval = setInterval(() => {
            start += increment;

            if (start >= targetValue) {
                clearInterval(interval);
                setCounter(targetValue); // Stop at the target value
            } else {
                setCounter(Math.round(start));
            }
        }, 10);

        return () => clearInterval(interval);
    }, [targetValue, duration]);

    return counter;
};

// Formatting numbers
const formatNumber = (number) => {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M'; // Format to 'M'
    }
    if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K'; // Format to 'K'
    }
    return number;
};

const About = () => {
    const weddingVendors = useCounter(60000, 2000); // 60,000
    const annualWeddings = useCounter(10000, 2000); // 10,000
    const mediaFollowers = useCounter(2500000, 2000); // 2.5M
    const monthlyReach = useCounter(20000000, 3000); // 20M

    return (
        <div>
            {/* SEO Meta Tags */}
            <Head>
                <title>About Us | WeddingBazaar</title>
                <meta
                    name="description"
                    content="WeddingBazaar is India's leading wedding planning platform offering vendor solutions, wedding inspiration, and a seamless planning experience."
                />
                <meta name="robots" content="index, follow" />
            </Head>
    <section className="bg-gray-700 text-white py-32">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Content */}
        <h1 className="text-3xl md:text-4xl pt-10 font-bold ">
          We are WeddingBazaar
        </h1>
        <p className="text-lg md:text-2xl font-semibold">
          We are bringing dream weddings to life!
        </p>
      </div>
    </section>


            <div className="bg-gray-50 py-16 italic px-4 text-gray-800">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-3xl font-bold text-center mb-8" aria-labelledby="about-title">
                        About Us
                    </h1>
                    <p className="text-lg mb-4">
                        WeddingBazaar is an Indian online wedding planning platform and a wedding media publisher, enabling couples to plan their weddings in a convenient & cost-effective manner.
                    </p>
                    <p className="text-lg mb-4">
                        We are on a spree to make wedding planning in India exciting and hassle-free. With a millennial army of wedding fanatics, WeddingBazaar aims to aid wedding blues of every new-age couple across the country.
                    </p>
                    <p className="text-lg mb-4">
                        We’re a driven team of wedding enthusiasts working to build a new way of wedding planning through delightful products and amazing customer service. We’re proud to have been the official wedding planner of celebrities like Yuvraj Singh & Bhuvneshwar Kumar. We love what we do, and that’s how we help plan your wedding like a loved one!
                    </p>
                    <div className="mt-8 text-center">
                        <h2 className="text-xl font-semibold" id="achievements-title">Our Achievements</h2>
                        <motion.div
                            className="flex flex-wrap justify-around mt-6 text-lg font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Achievement 1 */}
                            <div className="p-4">
                                <p className="text-3xl font-bold">{formatNumber(weddingVendors)}</p>
                                <p>Wedding Vendors</p>
                            </div>
                            {/* Achievement 2 */}
                            <div className="p-4">
                                <p className="text-3xl font-bold">{formatNumber(annualWeddings)}</p>
                                <p>Annual Weddings</p>
                            </div>
                            {/* Achievement 3 */}
                            <div className="p-4">
                                <p className="text-3xl font-bold">{formatNumber(mediaFollowers)}</p>
                                <p>Monthly Media Followers</p>
                            </div>
                            {/* Achievement 4 */}
                            <div className="p-4">
                                <p className="text-3xl font-bold">{formatNumber(monthlyReach)}</p>
                                <p>Monthly Reach</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="container mx-auto mt-20 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8" id="offer-title">What do we offer?</h2>
                    <p className="text-lg mb-4">
                        WeddingBazaar offers an end-to-end wedding planning solution for couples to ideate & realize their dream wedding conveniently & reliably. WeddingBazaar is the only wedding planning startup in India that offers assisted wedding planning through a personal wedding manager for all your needs of booking the perfect service provider.
                    </p>
                    <p className="text-lg mb-4">
                        WeddingBazaar is also an encyclopedia of the latest trends, expert opinions, and practical advice on wedding planning - from choosing a wedding theme, best lehenga designs, mehndi designs, sangeet ideas, photo poses, etc.
                    </p>
                </div>

                <div className="container mx-auto mt-20 max-w-4xl">
                    <div className="flex items-center justify-center space-x-2 mb-8">
                        <MdVerified className="text-pink-500 text-2xl" />
                        <h2 className="text-2xl font-bold">Trusted Wedding Vendors</h2>
                    </div>
                    <p className="text-sm mb-4">
                        WeddingBazaar offers an end-to-end wedding planning solution for couples to ideate & realize their dream wedding conveniently & reliably. WeddingBazaar is the only wedding planning startup in India that offers assisted wedding planning through a personal wedding manager for all your needs of booking the perfect service provider.
                    </p>
                </div>

                <div className="flex flex-col md: md:justify-between mt-8 items-center gap-4">
                    <a
                        href="#"
                        className="bg-pink-600 text-white font-medium py-2 px-16 rounded-lg shadow hover:bg-pink-700"
                    >
                        Hire a vendor
                    </a>
                </div>
                <Different />
            </div>
        </div>
    );
};

export default About;
