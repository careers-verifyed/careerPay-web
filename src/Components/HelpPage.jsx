import React from "react";
import "../Models/LearnPage/learnModel.scss"; // Importing the SCSS file for styles specific to the LearnModel.
import { LearnModel } from "../Models"; // Importing the LearnModel component from the Models folder.
import { Svg2 } from "../assets"; // Importing an SVG asset to be passed to the LearnModel component.

// HelpPage Component: A page that utilizes the LearnModel to display information about how the platform helps users.
const HelpPage = () => {
  // Content for the heading and subheading
  const headingContent = "How We Help"; // Main heading for the page.
  const subHeadingContent = (
    <>
      We enable seamless career growth and financial empowerment through talent
      financing,
      <br /> ESOP management, and streamlined payroll solutions.
    </>
  ); // Subheading content, structured as JSX to include a line break for better readability.

  return (
    <div>
      {/* Render the LearnModel component with specific props */}
      <LearnModel
        containerClass="learnModel__container" // Custom class for styling the container.
        DisplaySvg={Svg2} // SVG graphic displayed in the LearnModel.
        headingTitle={headingContent} // Heading text passed to the LearnModel.
        paragraphTitle={subHeadingContent} // Subheading content passed to the LearnModel.
      />
    </div>
  );
};

export default HelpPage;
