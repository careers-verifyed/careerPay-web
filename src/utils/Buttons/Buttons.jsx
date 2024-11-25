import React from "react";
import { motion } from "framer-motion";
import "./buttons.scss";

const Buttons = ({
  type = "big", // Default button type (big, small, icon, outline)
  content, // Button text or JSX content
  style = {}, // Inline styles
  textColor = "inherit", // Text color (default to inherit)
  backColor = "transparent", // Background color
  whileHover = { scale: 1.1 }, // Hover animation
  whileTap = { scale: 0.95 }, // Tap animation
}) => {
  // Map button types to their CSS classes
  const buttonTypes = {
    big: "bigBtn",
    small: "smallBtn",
    icon: "btnIcon",
    outline: "btnOutline",
  };

  // Default to "big" button if an invalid type is passed
  const buttonClass = buttonTypes[type] || buttonTypes.big;

  return (
    <motion.button
      className={buttonClass}
      style={{
        ...style,
        color: textColor,
        backgroundColor: backColor,
      }}
      whileHover={whileHover} // Apply hover animation
      whileTap={whileTap} // Apply tap animation
    >
      {content}
    </motion.button>
  );
};

export default Buttons;
