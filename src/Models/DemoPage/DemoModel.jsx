import React from "react";
import { motion } from "framer-motion"; // Importing motion for animations
import "./demoModel.scss"; // Importing the SCSS file for styling
import { Buttons } from "../../utils"; // Importing a reusable button component

// Functional Component for DemoModel
const DemoModel = ({ content }) => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: slightly below and invisible
    visible: { 
      opacity: 1, 
      y: 0, // Target state: in place and visible
      transition: { duration: 0.6, delay: 0.2 } // Animation settings: duration and delay
    },
  };

  // Animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Initial state: smaller and invisible
    visible: {
      opacity: 1, 
      scale: 1, // Target state: original size and visible
      transition: { duration: 0.5, delay: 0.5 }, // Animation settings for appearance
    },
    hover: {
      scale: 1.1, // Slightly enlarges when hovered over
      transition: { duration: 0.3 }, // Faster animation for hover effect
    },
  };

  return (
    <>
      {/* Main container with animation variants */}
      <motion.div
        className="demoModel"
        initial="hidden" // Initial animation state
        animate="visible" // Target animation state
        variants={containerVariants} // Using containerVariants for animation
      >
        <motion.div className="demoModel__content">
          {/* Title section with a slide-in effect */}
          <motion.h2
            className="demoModel__title text-center"
            initial={{ opacity: 0, x: -100 }} // Initial state: invisible and off-screen to the left
            animate={{ opacity: 1, x: 0 }} // Target state: visible and in place
            transition={{ duration: 0.8 }} // Animation duration
          >
            {content} {/* Dynamic content passed as a prop */}
          </motion.h2>

          {/* Button with hover animation */}
          <motion.div
            variants={buttonVariants} // Using buttonVariants for animation
            whileHover="hover" // Apply hover effect when the mouse is over the button
            initial="hidden" // Initial animation state
            animate="visible" // Target animation state
          >
            <Buttons
              type="outline" // Button type (outline style)
              content="Get a Demo" // Button text
              textColor="#fff" // Button text color
              backColor="#3458EB" // Button background color
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default DemoModel;
