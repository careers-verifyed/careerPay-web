import React from "react";
import "../Models/LearnPage/learnModel.scss";
import { LearnModel } from "../Models";
import { Svg2 } from "../assets";

const HelpPage = () => {
  const headingContent = "How We Help";
  const subHeadingContent = (
    <>
      We enable seamless career growth and financial empowerment through talent
      financing,
      <br /> ESOP management, and streamlined payroll solutions.
    </>
  );
  return (
    <div>
      <LearnModel
        containerClass="learnModel__container"
        DisplaySvg={Svg2}
        headingTitle={headingContent}
        paragraphTitle={subHeadingContent}
      />
    </div>
  );
};

export default HelpPage;
