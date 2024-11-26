import React from "react";
import "./heroModel.scss"; // Import styles for the HeroModel component
import { Buttons } from "../../utils"; // Reusable Buttons component
import { HeadingSvg } from "../../assets"; // SVG image for the hero section
import { MdSend } from "react-icons/md"; // Send icon from react-icons

// HeroModel component for the hero/banner section
const HeroModel = () => {
  return (
    <div className="heroModel">
      {" "}
      {/* Wrapper for the hero section */}
      <div className="heroModel-container">
        {" "}
        {/* Container for content and layout */}
        {/* Text Section */}
        <div className="text-section">
          <h1>
            Simplifying <span>Compensation</span> Management for Startups
          </h1>
          {/* Main heading with emphasis on "Compensation" using <span> */}
          <p>
            Empowering startups with Talent financing and growth-stage companies
            with credit financing
          </p>
          {/* Supporting description */}

          <div className="button-group">
            {" "}
            {/* Group for action buttons */}
            {/* Primary button for getting started */}
            <Buttons
              type="big" // Styling for a large button
              content="Get Started" // Text on the button
              backColor="#3458EB" // Button background color
              textColor="#FFF" // Button text color
              whileTap={{ scale: 0.95 }} // Scale down on tap/click
            />
            {/* Secondary button with an outline and an icon */}
            <Buttons
              type="outline" // Styling for an outlined button
              content={
                <>
                  Explore More <MdSend className="icon-style" />{" "}
                  {/* Icon appended to text */}
                </>
              }
              textColor="#161641" // Button text color
              backColor="transparent" // Transparent background
              whileTap={{ scale: 0.9, backgroundColor: "#1234a6" }} // Tap animation effect
            />
          </div>
        </div>
        {/* Image Section */}
        <div className="image-section">
          <img
            src={HeadingSvg} // SVG image source
            alt="Simplified Compensation Management" // Alternative text for accessibility
          />
        </div>
      </div>
    </div>
  );
};

export default HeroModel;
