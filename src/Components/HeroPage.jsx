import React from 'react'; // Importing React library for building the component.
import HeroModel from '../Models/HeroPage/HeroModel'; // Importing the HeroModel component from the Models folder.

const HeroPage = () => {
  return (
    <>
      {/* Rendering the HeroModel component inside HeroPage */}
      <HeroModel />
    </>
  );
};

export default HeroPage; // Exporting the HeroPage component to be used elsewhere in the app.
