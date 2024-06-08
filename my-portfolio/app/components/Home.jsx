"use client";

import React, { useState } from 'react';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import DialogBox from './DialogBox';
import TechnologyStack from './TechnologyStack'; // Import the new component
import ProjectSection from './ProjectSection';

const description = "Hi! I'm Jaindu Gajanayake, a second year Software Engineering student at the Informatics Institute of Technology in collaboration with the University of Westminster (UK). I specialize in mobile development with Kotlin for Android and have a keen interest in web development. Passionate about leveraging technology to solve real-world problems and enhance user experiences. Excited about the opportunities in software engineering and eager to contribute to meaningful projects.";

const educationDetails = {
  'School Education': "Details about school education...",
  'University Education': "Details about university education...",
};

const experienceDetails = "Details about experience...";

const HomeStart = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', sections: {} });
  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0], ['0%', '-20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const openDialog = (title, sections) => {
    setDialogContent({ title, sections });
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <section className="min-h-screen w-full">
        <div className="w-full mx-auto flex flex-col items-center justify-center h-160 ">
          <motion.div
            style={{ y, scale, opacity }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0, scale: 1 }}
            transition={{ duration: 6.8 }}
            className="flex flex-col lg:flex-row justify-between items-center w-full"
          >
            <div className="m-0 p-20 text-black">
              <h2 className="text-3xl sm:text-8xl lg:text-5xl font-bold mb-4">
                About Me
              </h2>
              <p className="text-lg sm:text-0.4xl lg:text-2xl text-gray-800">
                {description}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => openDialog('Education', educationDetails)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg mr-4"
                >
                  Education
                </button>
                <button
                  onClick={() => openDialog('Experience', { 'Experience': experienceDetails })}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg"
                >
                  Experience
                </button>
              </div>
            </div>
            <div className="lg:w-5/6 flex justify-center lg:justify-end p-8">
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
        <DialogBox
          isOpen={isDialogOpen}
          onClose={closeDialog}
          title={dialogContent.title}
          sections={dialogContent.sections}
        />
        <TechnologyStack /> 
        <ProjectSection />
      </section>
      
    </>
  );
};

export default HomeStart;
