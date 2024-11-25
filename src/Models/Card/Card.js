import React from "react";
import PropTypes from "prop-types";
import "./card.scss";

const Card = ({ img, title, description, designType, children }) => {
  return (
    <div
      className={`card ${designType}`}
      style={designType === "design2" ? { backgroundImage: `url(${img})` } : {}}
    >
      {designType === "design1" ? (
        <div className="card-body">
          {img && <img src={img} alt={title} />}
          {children ? (
            children
          ) : (
            <>
              <p className="card-title">{title}</p>
              {description && <p className="card-description">{description}</p>}
            </>
          )}
        </div>
      ) : (
        <div className="card-content-alt">
          <div className="card-overlay"></div>
          <div className="card-text">
            <h5 className="card-title-alt">{title}</h5>
            {description && <p className="card-description-alt">{description}</p>}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  designType: PropTypes.oneOf(["design1", "design2"]),
  children: PropTypes.node,
};

Card.defaultProps = {
  designType: "design1",
};

export default Card;
