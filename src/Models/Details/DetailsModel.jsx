import React from "react";
import { motion } from "framer-motion"; // Importing motion for animations
import "./detailsModel.scss"; // Importing the SCSS file for styling
import { GoPeople } from "react-icons/go"; // Importing an icon from react-icons
import { VscCreditCard } from "react-icons/vsc"; // Importing another icon from react-icons

const DetailsModel = () => {
  // Data array containing details for each statistics item
  const data = [
    {
      icon: <GoPeople />, // Icon for the card
      value: "46,328", // Numeric value to display
      description: "Happy Companies Served", // Description for the statistic
    },
    {
      icon: <GoPeople />,
      value: "2,245,341",
      description: "Payrolls Processed",
    },
    {
      icon: <GoPeople />,
      value: "828,867",
      description: "Successful Funding Applications",
    },
    {
      icon: <VscCreditCard />,
      value: "1,926,436",
      description: "ESOP Plans Managed",
    },
  ];

  return (
    // Main section with animation for fading in
    <motion.section
      className="detailsModel"
      initial={{ opacity: 0 }} // Initial state: fully transparent
      animate={{ opacity: 1 }} // Target state: fully visible
      transition={{ duration: 1 }} // Animation duration
    >
      <motion.div
        className="detailsModel__container"
        initial={{ y: -50 }} // Initial position: slightly above
        animate={{ y: 0 }} // Target position: in place
        transition={{ duration: 1 }} // Animation duration
      >
        {/* Title Section */}
        <div className="detailsModel__title">
          <motion.h2
            initial={{ opacity: 0, y: -50 }} // Initial state: invisible and above
            animate={{ opacity: 1, y: 0 }} // Target state: visible and in place
            transition={{ duration: 1 }} // Animation duration
          >
            <span>Helping Startups</span> <br />
            Navigate Financial Challenges
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} // Initial state: invisible
            animate={{ opacity: 1 }} // Target state: visible
            transition={{ duration: 1.5 }} // Slightly longer animation duration
          >
            We reached this milestone through innovation and commitment to our
            clients
          </motion.p>
        </div>

        {/* Statistics Section */}
        <div className="detailsModel__algo">
          {/* Mapping through the data array to display each statistic */}
          {data.map((item, index) => (
            <motion.div
              className="detailsModel__algo__item"
              key={index} // Unique key for each item
              initial={{ opacity: 0, scale: 0.8 }} // Initial state: invisible and smaller
              animate={{ opacity: 1, scale: 1 }} // Target state: visible and original size
              transition={{ delay: index * 0.2, duration: 0.8 }} // Delay for staggered animation
            >
              {/* Icon Section */}
              <div
                className="algo__item"
                aria-label={item.description} // Adding accessibility for screen readers
              >
                {item.icon}
              </div>
              {/* Details Section */}
              <div className="algo__details">
                <h3>{item.value}</h3> {/* Numeric value */}
                <p>{item.description}</p> {/* Description */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DetailsModel;
