import React from "react";
import { motion } from "framer-motion";
import "./downModel.scss";
import {
  Building,
  ManyHands,
  People,
} from "../../assets";
import Card from "../Card/Card"; // Importing the Card component to display individual cards

const DownModel = () => {
  // Data for the cards (images, titles, and descriptions)
  const cardsData = [
    {
      img: People, // Image for the card
      title: "Early-Stage Entrepreneurs and Startups", // Card title
      description:
        "They often face cash flow constraints but need to attract and retain skilled employees.", // Card description
    },
    {
      img: Building, // Image for the card
      title: "Growth-Stage Companies", // Card title
      description:
        "These companies require robust tools for managing payroll and equity as they scale.", // Card description
    },
    {
      img: ManyHands, // Image for the card
      title: "Employees and Talent Seeking Transparency", // Card title
      description:
        "Professionals value clear and accessible information about their compensation.", // Card description
    },
  ];

  return (
    <div className="downModel">
      <div className="downModel__content">
        {/* Animated downModelText */}
        <motion.div
          className="downModelText text-center"
          initial={{ opacity: 0 }} // Initial state: invisible
          animate={{ opacity: 1 }} // Target state: visible
          transition={{ duration: 1 }} // Animation duration
        >
          <h2>
            Manage Your Entire <br /> Compensation Process in One <br />{" "}
            Platform
          </h2>
          <p>Who is Career Pay Suitable For?</p>
        </motion.div>

        {/* Animated Card Section */}
        <div className="downModelCard">
          {/* Mapping through the card data and displaying each card */}
          {cardsData.map((card, index) => (
            <motion.div
              className="downModelCard__item"
              key={index}
              initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly below
              animate={{ opacity: 1, y: 0 }} // Target state: visible and in original position
              transition={{ delay: index * 0.3, duration: 0.8 }} // Delay for staggered effect and duration of animation
            >
              {/* Card component that receives data as props */}
              <Card
                img={card.img} // Passing image as prop
                title={card.title} // Passing title as prop
                description={card.description} // Passing description as prop
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownModel;
