import React from "react";
import { motion } from "framer-motion";
import "./reviewModel.scss";
import { Buttons } from "../../utils";
import { FaArrowRightLong } from "react-icons/fa6";
import { ManSvg } from "../../assets";

const ReviewModel = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="reviewModel"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="reviewModel__container">
        {/* Image Section */}
        <motion.div
          className="reviewModel__img"
          variants={imageVariants}
        >
          <img src={ManSvg} alt="Client's portrait" />
        </motion.div>

        {/* Content Section */}
        <motion.div className="reviewModel__content" variants={contentVariants}>
          <p className="reviewModelQuote">
            What Our Clients Say <br />
            "The unseen efforts of streamlining compensation with Career Pay
            have made a significant impact on our company's growth."
          </p>
          <h4 className="reviewModelAuthor">Tim Smith</h4>
          <span className="reviewModelDesignation">
            Nigerian Dragon Boat Racing Association
          </span>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
          >
            <Buttons
              type="outline"
              textColor="#3458EB"
              backColor="transparent"
              content={
                <>
                  Meet all my customers{" "}
                  <FaArrowRightLong className="icon-styling" />
                </>
              }
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ReviewModel;
