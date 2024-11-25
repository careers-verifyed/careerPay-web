import React from "react";
import { motion } from "framer-motion";
import "./demoModel.scss";
import { Buttons } from "../../utils";

const DemoModel = ({content}) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <motion.div
        className="demoModel"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="demoModel__content">
          {/* Title Animation */}
          <motion.h2
            className="demoModel__title text-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content}
          </motion.h2>

          {/* Button Animation */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <Buttons
              type="outline"
              content="Get a Demo"
              textColor="#fff"
              backColor="#3458EB"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default DemoModel;
