import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa"; // Using a spinner icon


const Loading = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle route changes to show loading spinner
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    // Listen to route changes
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router.events]);

  return (
    <div>
      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50 z-50">
          {/* <motion.div
            className="w-16 h-16 border-4 border-t-transparent border-CustomChocolate rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          >
                    </motion.div> */}

            <FaSpinner className="w-16 h-16 text-CustomChocolate animate-spin" />
        </div>
      )}

      {/* Page content */}
      <div>{children}</div>
    </div>
  );
};

export default Loading;
