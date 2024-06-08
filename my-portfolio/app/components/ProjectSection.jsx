// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';

// const projects = [
//   {
//     name: 'Project One',
//     description: 'Description of project one...',
//     githubLink: 'https://github.com/username/project-one'
//   },
//   {
//     name: 'Project Two',
//     description: 'Description of project two...',
//     githubLink: 'https://github.com/username/project-two'
//   },
//   // Add more projects as needed
// ];

// const ProjectSection = () => {
//   return (
//     <section className="min-h-screen w-full bg-gray-100 py-20">
//       <div className="container mx-auto">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">Projects</h2>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-white p-8 rounded-lg shadow-lg"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1 }}
//             >
//               <h3 className="text-2xl lg:text-3xl font-bold mb-4">{project.name}</h3>
//               <p className="text-lg text-gray-700 mb-4">{project.description}</p>
//               <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-orange-500 text-white rounded-lg">
//                 View on GitHub
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const ProjectSection = () => {
  const services = [
    '01. UI Design',
    '02. Prototyping',
    '03. UX Design and Usability',
    '04. Design System',
    '05. User Flows and Wireframes',
    '06. User Testing'
  ];
  const services2 = [
    '07. UI Design',
    '08. Prototyping',
    '09. UX Design and Usability',
    '10. Design System',
    '05. User Flows and Wireframes',
    '06. User Testing'
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

  return (
    <motion.div className="relative w-full bg-black text-white flex flex-col items-start justify-center p-10">
        <div className='lg:mb-36'>
            <h2 className="lg:text-8xl sm:text-6xl absolute top-0 left-0 mt-10 ml-10">Projects</h2>
        </div>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
        <div className="text-2xl lg:text-4xl text-gray-500 justify-self-start self-end mb-10">
          <p className="text-left lg:mr-12">
            <span className="text-white font-bold">Projects</span> product design ignites interest, 
            fosters engagement, and nurtures loyalty. 
            
          </p>
        </div>
        <div className="flex flex-col space-y-6 text-left ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1 }}
              className="relative"
            >
              <p>{service}</p>
              {index < services.length - 1 && <hr className="border-t-2 border-white mt-2" />}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col space-y-6 text-left">
          {services2.map((service, index) => (
            <motion.div
              key={index}
              initial={{ x: '-100%' }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1 }}
              className="relative"
            >
              <p>{service}</p>
              {index < services.length - 1 && <hr className="border-t-2 border-white mt-2" />}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
