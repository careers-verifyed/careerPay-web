import React from "react"; // Importing React library
import "../Models/LearnPage/learnModel.scss"; // Importing the SCSS styles for the LearnPage component
import { LearnModel } from "../Models"; // Importing the LearnModel component, which is likely a reusable component for displaying learning content
import { Svg1 } from "../assets"; // Importing an SVG asset (Svg1) that will be displayed in the LearnModel

const LearnPage = () => {
  // Defining the heading content to be displayed in the LearnModel
  const headingContent = (
    <>
      Why Career Pay? Our <br /> comprehensive compensation <br /> management
      software ensures:
    </>
  );

  // Defining the paragraph content to explain the benefits of Career Pay software
  const paragraphContent = (
    <>
      Full automation of payroll processing, ensuring compliance and accuracy.{" "}
      <br />
      Simplified ESOP management to attract and retain top talent. <br />
      Credit financing options to help manage cash flow challenges effectively.
    </>
  );

  return (
    <div>
      {/* Rendering the LearnModel component and passing the necessary props */}
      <LearnModel
        containerClass="learnModel__container" // CSS class for styling the LearnModel container
        DisplaySvg={Svg1} // Passing the imported Svg1 as a prop to the LearnModel
        headingTitle={headingContent} // Passing the heading content
        paragraphTitle={paragraphContent} // Passing the paragraph content
      />
    </div>
  );
};

export default LearnPage; // Exporting the LearnPage component to be used in other parts of the application
