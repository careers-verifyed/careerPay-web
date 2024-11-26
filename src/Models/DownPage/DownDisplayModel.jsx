import React from "react";
import { motion } from "framer-motion";
import "./downModel.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { GirlLaptop, HandLaptop, LadyLaptop } from "../../assets";

const DownDisplayModel = () => {
  // Data for the display cards
  const cardsDisplayData = [
    {
      img: GirlLaptop, // Image for the card
      title: "Creating Streamlined Compensation Processes", // Card title
      description: (
        <>
          Read More <FaArrowRightLong /> {/* Link with arrow icon */}
        </>
      ),
    },
    {
      img: HandLaptop, // Image for the card
      title: "Understanding Your Financial Options with Career Pay", // Card title
      description: (
        <>
          Read More <FaArrowRightLong /> {/* Link with arrow icon */}
        </>
      ),
    },
    {
      img: LadyLaptop, // Image for the card
      title: "Managing Employee Ownership Plans Efficiently", // Card title
      description: (
        <>
          Read More <FaArrowRightLong /> {/* Link with arrow icon */}
        </>
      ),
    },
  ];

  // Animation variants for card visibility (entering view)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden with slight downward movement
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Fade in and slide into place
  };

  // Animation variants for container visibility and staggered animation
  const containerVariants = {
    hidden: { opacity: 0 }, // Initially hidden
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Staggered animation for child elements
    },
  };

  return (
    <motion.div
      className="downModel"
      initial="hidden" // Initial state for animation
      animate="visible" // Target state after animation
      variants={containerVariants} // Apply container animation variants
    >
      <div className="downModel__display">
        {/* Header Section */}
        <motion.div
          className="downModel__header text-center"
          initial={{ opacity: 0, y: -20 }} // Initial state: hidden with slight upward movement
          animate={{ opacity: 1, y: 0 }} // Fade in and slide to original position
          transition={{ duration: 0.5 }} // Transition duration
        >
          <h3>
            Stay updated with industry trends and tips to <br /> improve
            compensation management and talent <br /> retention.
          </h3>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="downModel__cards"
          variants={containerVariants} // Apply container animation variants
          initial="hidden" // Initial state for child elements
          animate="visible" // Target state after animation
        >
          {/* Map through the cards data and display each card */}
          {cardsDisplayData.map(({ img, title, description }, index) => (
            <motion.div
              className="downModel__card"
              key={index}
              variants={cardVariants} // Apply card animation variants
              whileHover={{ scale: 1.05 }} // Slightly scale up the card on hover
            >
              <img src={img} alt={title} className="downModel__card__img" /> {/* Card image */}
              <div className="downModel__card__text">
                <h4 className="downModel__card__title text-center">{title}</h4> {/* Card title */}
                <p className="downModel__card__description text-center">
                  {description} {/* Card description */}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DownDisplayModel;
