import React from 'react'; // Importing the React library to use JSX
import { ReviewModel } from '../Models'; // Importing the ReviewModel component, which contains the review-related content

// Defining the ReviewPage component
const ReviewPage = () => {
  return (
    <div>
      {/* Rendering the ReviewModel component inside the ReviewPage */}
      <ReviewModel /> 
    </div>
  );
};

// Exporting the ReviewPage component to be used in other parts of the application
export default ReviewPage;
