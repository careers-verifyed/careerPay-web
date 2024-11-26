import React from "react";
import PropTypes from "prop-types";
import "./card.scss";

// Card Component: A reusable card component that supports images, titles, descriptions, and optional custom children.
const Card = ({ img, title, description, displayType, children }) => {
    return (
        // The card's wrapper div with a dynamic class based on the displayType prop for styling variations.
        <div className={`card ${displayType}`}>
            <div className="card-body">
                {/* Conditional rendering for the image, displayed only if the img prop is provided */}
                {img && <img src={img} alt={title} />}
                
                {/* Conditional rendering for children content. 
                    If children are provided, they override the default structure.
                    Otherwise, title and description are displayed. */}
                {children ? (
                    children 
                ) : (
                    <>
                        {/* Display the title (required prop) */}
                        <p className="card-title">{title}</p>
                        
                        {/* Display the description only if the description prop is provided */}
                        {description && <p className="card-description">{description}</p>}
                    </>
                )}
            </div>
        </div>
    );
};

// PropTypes definition for type-checking props
Card.propTypes = {
    img: PropTypes.string, // Optional image URL
    title: PropTypes.string.isRequired, // Required title
    description: PropTypes.string, // Optional description
    displayType: PropTypes.string, // Optional class name for styling variations
    children: PropTypes.node, // Optional children to override default content
};

export default Card;
