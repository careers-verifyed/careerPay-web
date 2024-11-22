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
          <h1>Simplifying <span>Compensation</span> Management for Startups</h1>
          <p>
            Empowering startups with Talent financing and growth-stage companies
            with credit financing
          </p>
          <div className="button-group">
            <Buttons textSite="Get Started" />
            <Buttons
              IconOutlineSite={
                <>
                  Explore <MdSend className="icon-style" />
                </>
              }
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
