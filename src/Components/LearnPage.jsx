import React from "react";
import "../Models/LearnPage/learnModel.scss";
import { LearnModel } from "../Models";
import { Svg1 } from "../assets";

const LearnPage = () => {
  const headingContent = (
    <>
      Why Career Pay? Our <br /> comprehensive compensation <br /> management
      software ensures:
    </>
  );

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
      <LearnModel
        containerClass="learnModel__container"
        DisplaySvg={Svg1}
        headingTitle={headingContent}
        paragraphTitle={paragraphContent}
      />
    </div>
  );
};

export default LearnPage;
