import React from "react";
import "./buttons.scss";

const Buttons = ({
  type = "big", // Default button type (big, small, icon, outline)
  content, // Button text or JSX content
  style = {}, // Inline styles
  textColor = "inherit", // Text color (default to inherit)
  backColor = "transparent", // Background color (default to transparent)
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
    <button
      className={buttonClass}
      style={{
        ...style,
        color: textColor,
        backgroundColor: backColor,
      }}
    >
      {content}
    </button>
  );
};

export default Buttons;
