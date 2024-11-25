import React from "react";
import "./heroModel.scss";
import { Buttons } from "../../utils";
import { HeadingSvg } from "../../assets";
import { MdSend } from "react-icons/md";

const HeroModel = () => {
  return (
    <div className="heroModel">
      <div className="heroModel-container">
        <div className="text-section">
          <h1>
            Simplifying <span>Compensation</span> Management for Startups
          </h1>
          <p>
            Empowering startups with Talent financing and growth-stage companies
            with credit financing
          </p>
          <div className="button-group">
          <Buttons type="big" content="Get Started" backColor="#3458EB" textColor="#FFF" />
            <Buttons
              type="outline"
              content={
                <>
                  Explore More <MdSend className="icon-style" />
                </>
              }
              textColor="#161641"
              backColor="transparent"
              whileTap={{ scale: 0.9, backgroundColor: "#1234a6" }}
            />
          </div>
        </div>
        <div className="image-section">
          <img src={HeadingSvg} alt="Simplified Compensation Management" />
        </div>
      </div>
    </div>
  );
};

export default HeroModel;
