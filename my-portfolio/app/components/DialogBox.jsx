"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DialogBox = ({ isOpen, onClose, title, sections }) => {
  const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 lg:w-1/3">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="mb-4">
          <div className="flex space-x-4">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`px-4 py-2 rounded-lg ${activeSection === section ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
        <p className="text-lg mb-4 text-black">{sections[activeSection]}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default DialogBox;
