import React, { useState } from "react";
import { Logo } from "../../assets"; // Import the company logo
import { motion } from "framer-motion"; // For animations
import { HiOutlineMenuAlt1 } from "react-icons/hi"; // Menu icon
import { Link } from "react-router-dom"; // For navigation
import "./navbar.scss"; // Navbar styling

// Component for the brand logo
const NavbarBrand = () => (
  <Link className="navbar-brand me-2" to="/" aria-label="Home">
    <img src={Logo} alt="Company Logo" /> {/* Display company logo */}
  </Link>
);

// Component for the navbar toggle button (hamburger menu)
const NavbarToggle = () => (
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarContent" // Links to the collapsible content
    aria-controls="navbarContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <HiOutlineMenuAlt1 size="1.5em" /> {/* Icon for the toggle button */}
  </button>
);

// Component for rendering the navigation links
const NavbarLinks = ({ links, activeLink, setActiveLink }) => (
  <ul className="navbar-nav mb-2 mb-lg-0 mx-auto"> {/* Centered navigation links */}
    {links.map((link, index) => (
      <Link
      className={`nav-link ${activeLink === link.path ? "active" : ""}`} // Add 'active' class if the link is selected
      to={link.path} // Navigation path
      onClick={() => setActiveLink(link.path)} // Update the active link state on click
    >
      <motion.li
        className="nav-item"
        key={index}
        whileHover={{ scale: 1.1 }} // Animation on hover
        whileTap={{ scale: 0.95 }} // Animation on tap/click
      >
          {link.name} {/* Display the name of the link */}
      </motion.li>
        </Link>
    ))}
  </ul>
);

// Component for the login and signup buttons
const NavbarButtons = () => (
  <div className="navLast d-flex align-items-center"> {/* Align buttons at the end */}
    <motion.button
      type="button"
      className="loginBtn btn btn-link px-3 me-3"
      whileHover={{ scale: 1.1 }} // Animation on hover
      whileTap={{ scale: 0.95 }} // Animation on tap/click
    >
      Login {/* Login button */}
    </motion.button>
    <motion.button
      type="button"
      className="signupBtn btn btn-primary me-3"
      whileHover={{
        backgroundColor: "#4d4d4d", // Change background color on hover
        color: "#fff", // Change text color on hover
        scale: 1.1, // Scale up on hover
      }}
      whileTap={{ scale: 0.95 }} // Scale down on tap/click
    >
      Sign up {/* Sign-up button */}
    </motion.button>
  </div>
);

// Main Navbar component
const Navbar = () => {
  // State to track the currently active link
  const [activeLink, setActiveLink] = useState(window.location.pathname); // Initialize to the current URL path

  // Array of navigation links
  const navLinks = [
    { name: "Home", path: "/" }, // Home page
    { name: "About", path: "/about" }, // About page
    { name: "Testimonials", path: "/testimonials" }, // Testimonials page
    { name: "FAQ", path: "/faq" }, // FAQ page
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-light">
      <div className="container"> {/* Container for responsive layout */}
        <NavbarBrand /> {/* Logo */}
        <NavbarToggle /> {/* Hamburger menu button */}
        <motion.div
          className="collapse navbar-collapse" // Collapsible content
          id="navbarContent"
          initial={{ opacity: 0, y: -20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Final animation state
          transition={{ duration: 0.5, ease: "easeInOut" }} // Animation timing
        >
          <NavbarLinks
            links={navLinks} // Pass navigation links
            activeLink={activeLink} // Pass the active link state
            setActiveLink={setActiveLink} // Pass the function to update the active link
          />
          <NavbarButtons /> {/* Login and Sign-up buttons */}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
