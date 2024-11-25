import React from "react";
import "./demoModel.scss";
import { Buttons } from "../../utils";

const DemoModel = () => {
  return (
    <>
      <div className="demoModel">
        <div className="demoModel__content">
          <h2 className="demoModel__title text-center">
            We simplify talent financing, ESOPs, and <br /> payroll to support
            career growth.
          </h2>
          <Buttons
            type="outline"
            content="Get a Demo"
            textColor="#fff"
            backColor="#3458EB"
          />
        </div>
      </div>
    </>
  );
};

export default DemoModel;
