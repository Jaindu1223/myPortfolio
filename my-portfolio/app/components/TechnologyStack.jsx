"use client";

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', logo: '/Images/react.png' }, // Update paths to your logos
  { name: 'Next.js', logo: '/Images/nextjs.png' },
  { name: 'Kotlin', logo: '/Images/kotlin.png' },
  { name: 'Node.js', logo: '/Images/js.png' },
  { name: 'JavaScript', logo: '/logos/javascript.png' },
  // Add more technologies as needed
];

const TechnologyStack = () => {
  return (
    <section className="bg-black py-20 h-160 ">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">Technology Stack</h2>
        <div className="flex flex-wrap justify-center items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="m-4"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={tech.logo} alt={tech.name} className="h-20 w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;

