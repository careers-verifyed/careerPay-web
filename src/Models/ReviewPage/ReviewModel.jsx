import React from "react";
import "./reviewModel.scss";
import { Buttons } from "../../utils";
import { FaArrowRightLong } from "react-icons/fa6";
import { ManSvg } from "../../assets";

const ReviewModel = () => {
  return (
    <section className="reviewModel">
      <div className="reviewModel__container">
        {/* Image Section */}
        <div className="reviewModel__img">
          <img src={ManSvg} alt="Client's portrait" />
        </div>

        {/* Content Section */}
        <div className="reviewModel__content">
          <p className="reviewModelQuote">
            What Our Clients Say <br />
            "The unseen efforts of streamlining compensation with Career Pay
            have made a significant impact on our company's growth."
          </p>
          <h4 className="reviewModelAuthor">Tim Smith</h4>
          <span className="reviewModelDesignation">
            Nigerian Dragon Boat Racing Association
          </span>
          <Buttons
            type="outline"
            textColor="#3458EB"
            backColor="transparent"
            content={
              <>
                Meet all my customers{" "}
                <FaArrowRightLong className="icon-styling" />
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewModel;
