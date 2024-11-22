import React from "react";
import PropTypes from "prop-types";
import "./card.scss";

const Card = ({ img, title, description, displayType, children }) => {
    return (
        <div className={`card ${displayType}`}>
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
        </div>
    );
};

Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    displayType: PropTypes.string,
    children: PropTypes.node,
}
export default Card;
