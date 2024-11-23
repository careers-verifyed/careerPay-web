import React from 'react';
import './learnModel.scss';
import { Svg1 } from '../../assets';
import { Buttons } from '../../utils';
import { motion } from 'framer-motion';

const LearnModel = ({ headingTitle, paragraphTitle }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="learnModel"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="learnModel__container">
        {/* Left Section: Image */}
        <motion.div className="learnModel__container__left" variants={imageVariants}>
          <img src={Svg1} alt="Representation of Career Pay concept" />
        </motion.div>

        {/* Right Section: Text Content */}
        <motion.div className="learnModel__container__right" variants={containerVariants}>
          <h2>{headingTitle}</h2>
          <p>{paragraphTitle}</p>
          <Buttons textSite="Learn More" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LearnModel;
