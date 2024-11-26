import React from 'react'; // Importing the React library to use JSX
import { NavbarModel } from '../Models'; // Importing the NavbarModel component, which is the actual navigation model being used

// Defining the Navbar component
const Navbar = () => {
  return (
    <>
      {/* Rendering the NavbarModel component inside the Navbar */}
      <NavbarModel /> 
    </>
  );
};

// Exporting the Navbar component to be used in other parts of the application
export default Navbar;
