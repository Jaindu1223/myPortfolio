"use client";

import React from 'react';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const description = "I am Jaindu Gajanayake, a passionate developer with expertise in web and mobile development. I love creating user-friendly and efficient applications.";

const HomeStart = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 4.5], ['0%', '-70%']);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.34]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 h-full">
        <motion.div
          style={{ y, scale, }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-center w-full bg-gray-200 h-144 "
        >
          <div className="lg:w-1/2 p-8 text-black">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-800">
              {description}
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end p-8">
            <Image
              src="/logo/mylogo.png" // Update this with the actual path to your photo
              alt="Jaindu Gajanayake"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeStart;
