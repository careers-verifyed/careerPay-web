import React from "react";
import "./downModel.scss";
import { GirlLaptop, HandLaptop, LadyLaptop } from "../../assets";
import Card from "../Card/Card";
import { FaArrowRightLong } from "react-icons/fa6";

const DownDisplayModel = () => {
  const cardsDisplayData = [
    {
      img: GirlLaptop,
      title: "Creating Streamlined Compensation Processes",
      description: "Read More",
    },
    {
      img: HandLaptop,
      title: "Understanding Your Financial Options with Career Pay",
      description: "Read More",
    },
    {
      img: LadyLaptop,
      title: "Managing Employee Ownership Plans Efficiently",
      description: "Read More",
    },
  ];

  return (
    <div className="downModel">
      <div className="downModel__display">
        {/* Header Text */}
        <div className="downModelText text-center">
          <h3>
            Stay updated with industry trends and tips to <br /> improve
            compensation management and talent <br /> retention.
          </h3>
        </div>

        {/* Cards Section */}
        <div className="downModelDisplay">
          {cardsDisplayData.map((display, index) => (
            <div className="downModelDisplay__item" key={index}>
              <Card img={display.img} title={display.title} designType="design2">
                <div className="card-text-content">
                  <h4 className="card-text-title">{display.title}</h4>
                  <p className="card-text-description">
                    {display.description} <FaArrowRightLong className="icon-style" />
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownDisplayModel;
