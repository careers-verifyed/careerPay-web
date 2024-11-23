import React from 'react';
import { LearnModel } from '../Models';

const LearnPage = () => {
  const headingContent = (
    <>
      Why Career Pay ? Our <br /> comprehensive compensation <br /> management software ensures:
    </>
  );

  const paragraphContent = (
    <>
      Full automation of payroll processing, ensuring compliance and accuracy. 
      Simplified ESOP management to attract and retain top talent. 
      Credit financing options to help manage cash flow challenges effectively.
    </>
  );

  return (
    <div>
      <LearnModel headingTitle={headingContent} paragraphTitle={paragraphContent} />
    </div>
  );
};

export default LearnPage;
