"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const services = [
  { name: 'Web Developer' },
  { name: 'Mobile Developer' },
  { name: 'Frontend Developer' },
  { name: 'Backend Developer' },
];

const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prevService) => (prevService + 1) % services.length);
    }, 3000); // Change service every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className=" bg-white text-gray-900 my-2 h-224">
      <div className="flex flex-col items-center w-full px-4 sm:px-8 lg:px-16 mt-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row justify-between items-center w-full pt-10"
        >
          <div className="flex flex-col items-start">
            <h1 className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">
                Jaindu Gajanayake{" "}
              </span>
            </h1>
            <div className="flex flex-col items-start h-24 sm:h-32 lg:h-40">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentService}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl lg:text-8xl text-gray-700 font-bold"
                >
                  {services[currentService].name}
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              className="px-6 py-3 mt-4 rounded-full bg-orange-500 hover:bg-orange-600 hover:text-white text-gray-950"
              onClick={scrollToContact}
            >
              Contact Us
            </button>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/logo/mylogo.png" // Update this with the actual path to your photo
              alt="Jaindu Gajanayake"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
