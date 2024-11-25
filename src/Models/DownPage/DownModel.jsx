import React from "react";
import { motion } from "framer-motion";
import "./downModel.scss";
import {
  Building,
  ManyHands,
  People,
} from "../../assets";
import Card from "../Card/Card";

const DownModel = () => {
  const cardsData = [
    {
      img: People,
      title: "Early-Stage Entrepreneurs and Startups",
      description:
        "They often face cash flow constraints but need to attract and retain skilled employees.",
    },
    {
      img: Building,
      title: "Growth-Stage Companies",
      description:
        "These companies require robust tools for managing payroll and equity as they scale.",
    },
    {
      img: ManyHands,
      title: "Employees and Talent Seeking Transparency",
      description:
        "Professionals value clear and accessible information about their compensation.",
    },
  ];

  return (
    <div className="downModel">
      <div className="downModel__content">
        {/* Animated downModelText */}
        <motion.div
          className="downModelText text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>
            Manage Your Entire <br /> Compensation Process in One <br />{" "}
            Platform
          </h2>
          <p>Who is Career Pay Suitable For?</p>
        </motion.div>

        {/* Animated Card Section */}
        <div className="downModelCard">
          {cardsData.map((card, index) => (
            <motion.div
              className="downModelCard__item"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              <Card
                img={card.img}
                title={card.title}
                description={card.description}
                designType="design1"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownModel;
