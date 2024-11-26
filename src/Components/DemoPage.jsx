import React from "react";
import { DemoModel } from "../Models";

// DemoPage Component: A simple page component that utilizes the DemoModel component to display a message.
const DemoPage = () => {
  return (
    <>
      {/* Render the DemoModel component */}
      <DemoModel
        // Pass a custom content prop to DemoModel
        content={
          <>
            {/* JSX content for the message with a line break for formatting */}
            We simplify talent financing, ESOPs, and <br /> payroll to support
            career growth.
          </>
        }
      />
    </>
  );
};

export default DemoPage;
