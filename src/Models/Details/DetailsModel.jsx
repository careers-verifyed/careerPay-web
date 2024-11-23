import React from "react";
import { motion } from "framer-motion";
import "./detailsModel.scss";
import { GoPeople } from "react-icons/go";
import { VscCreditCard } from "react-icons/vsc";

const DetailsModel = () => {
  const data = [
    {
      icon: <GoPeople />,
      value: "46,328",
      description: "Happy Companies Served",
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
    <motion.section
      className="detailsModel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="detailsModel__container"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="detailsModel__title">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span>Helping Startups</span> <br />
            Navigate Financial Challenges
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            We reached this milestone through innovation and commitment to our
            clients
          </motion.p>
        </div>

        <div className="detailsModel__algo">
          {data.map((item, index) => (
            <motion.div
              className="detailsModel__algo__item"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="algo__item" aria-label={item.description}>
                {item.icon}
              </div>
              <div className="algo__details">
                <h3>{item.value}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DetailsModel;
