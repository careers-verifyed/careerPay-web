import React from "react";
import "./learnModel.scss"; // Import styles for the LearnModel component
import { Buttons } from "../../utils"; // Import the reusable Buttons component
import { motion } from "framer-motion"; // For adding animations

// LearnModel component to display a structured section with an image, heading, paragraph, and button
const LearnModel = ({
  headingTitle, // Title for the section
  paragraphTitle, // Supporting paragraph text
  DisplaySvg, // Image or SVG to be displayed
  containerClass, // Additional class for custom styling
}) => {
  // Animation variants for the container (right section)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: hidden with downward offset
    visible: {
      opacity: 1, // Fully visible
      y: 0, // At original position
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth transition
    },
  };

  // Animation variants for the image (left section)
  const imageVariants = {
    hidden: { opacity: 0, x: -50 }, // Initial state: hidden with leftward offset
    visible: {
      opacity: 1, // Fully visible
      x: 0, // At original position
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth transition
    },
  };

  return (
    <motion.section
      className="learnModel" // Top-level class for the component
      initial="hidden" // Initial animation state
      animate="visible" // Final animation state
      variants={containerVariants} // Apply animation variants to the container
    >
      <div className={containerClass}> {/* Customizable container class */}
        {/* Left Section: Image */}
        <motion.div
          className="learnModel__container__left" // Styling for the left section
          variants={imageVariants} // Apply image-specific animation variants
        >
          <img
            src={DisplaySvg} // Image or SVG source
            alt="Representation of Career Pay concept" // Alternative text for accessibility
          />
        </motion.div>

        {/* Right Section: Text Content */}
        <motion.div
          className="learnModel__container__right" // Styling for the right section
          variants={containerVariants} // Apply container-specific animation variants
        >
          <h2>{headingTitle}</h2> {/* Section heading */}
          <p>{paragraphTitle}</p> {/* Section paragraph */}
          <Buttons
            type="big" // Style the button as a large button
            content="Learn More" // Text on the button
            textColor="#fff" // Button text color
            backColor="#3458EB" // Button background color
            whileTap={{ scale: 0.9, backgroundColor: "#1234a6" }} // Animation on tap: shrink and change background color
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LearnModel;
