import React from "react";
import { motion } from "framer-motion";
import "./downModel.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { GirlLaptop, HandLaptop, LadyLaptop } from "../../assets";

const DownDisplayModel = () => {
  const cardsDisplayData = [
    {
      img: GirlLaptop,
      title: "Creating Streamlined Compensation Processes",
      description: (
        <>
          Read More <FaArrowRightLong />
        </>
      ),
    },
    {
      img: HandLaptop,
      title: "Understanding Your Financial Options with Career Pay",
      description: (
        <>
          Read More <FaArrowRightLong />
        </>
      ),
    },
    {
      img: LadyLaptop,
      title: "Managing Employee Ownership Plans Efficiently",
      description: (
        <>
          Read More <FaArrowRightLong />
        </>
      ),
    },
  ];

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className="downModel"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="downModel__display">
        {/* Header Section */}
        <motion.div
          className="downModel__header text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>
            Stay updated with industry trends and tips to <br /> improve
            compensation management and talent <br /> retention.
          </h3>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="downModel__cards"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cardsDisplayData.map(({ img, title, description }, index) => (
            <motion.div
              className="downModel__card"
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={img} alt={title} className="downModel__card__img" />
              <div className="downModel__card__text">
                <h4 className="downModel__card__title text-center">{title}</h4>
                <p className="downModel__card__description text-center">
                  {description}
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
