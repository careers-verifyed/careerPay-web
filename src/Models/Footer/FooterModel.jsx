import React from "react";
import "./footer.scss"; // Importing footer-specific styles
import {
  FaInstagram,
  FaDribbble,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6"; // Importing social media icons
import { TbSend } from "react-icons/tb"; // Importing send icon for the newsletter
import { Logo } from "../../assets"; // Importing company logo asset
import { motion } from "framer-motion"; // For animations

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="dFooter"> {/* Main footer container */}
      <div className="container text-center text-md-start mt-5"> {/* Responsive container */}
        <div className="row"> {/* Grid layout */}
          
          {/* Logo and Social Links Section */}
          <motion.div
            className="col-md-3 col-lg-4 mb-4 text-center text-md-start order-2"
            initial={{ opacity: 0 }} // Animation starts with 0 opacity
            animate={{ opacity: 1 }} // Animation ends with full opacity
            transition={{ duration: 1 }} // Animation duration
          >
            <div className="logoDiv mb-4"> {/* Logo wrapper */}
              <img src={Logo} alt="Company Logo" /> {/* Display company logo */}
            </div>
            <p>Copyright © {currentYear} Careers Verified.</p> {/* Dynamic copyright year */}
            <p>All rights reserved</p>
            
            {/* Social Media Links */}
            <div className="socials d-flex justify-content-center justify-content-md-start">
              {/* Instagram */}
              <motion.a
                href="#!" // Placeholder link
                className="me-4 text-reset social-icon"
                whileHover={{ scale: 1.2 }} // Hover effect: scale up
                whileTap={{ scale: 0.9 }} // Tap effect: scale down
                transition={{ duration: 0.3 }} // Smooth transition
              >
                <FaInstagram />
              </motion.a>
              {/* Dribbble */}
              <motion.a
                href="#!"
                className="me-4 text-reset social-icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaDribbble />
              </motion.a>
              {/* Twitter */}
              <motion.a
                href="#!"
                className="me-4 text-reset social-icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaSquareXTwitter />
              </motion.a>
              {/* YouTube */}
              <motion.a
                href="#!"
                className="me-4 text-reset social-icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>

          {/* Company Links Section */}
          <motion.div
            className="col-md-2 col-lg-2 mb-4 order-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h6 className="fw-bold mb-4">Company</h6> {/* Section title */}
            <ul className="list-unstyled"> {/* List of links */}
              <li><a href="#!" className="text-reset">About us</a></li>
              <li><a href="#!" className="text-reset">Blog</a></li>
              <li><a href="#!" className="text-reset">Contact us</a></li>
              <li><a href="#!" className="text-reset">Pricing</a></li>
              <li><a href="#!" className="text-reset">Testimonials</a></li>
            </ul>
          </motion.div>

          {/* Support Links Section */}
          <motion.div
            className="col-md-3 col-lg-2 mb-4 order-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h6 className="fw-bold mb-4">Support</h6> {/* Section title */}
            <ul className="list-unstyled"> {/* List of links */}
              <li><a href="#!" className="text-reset">Help Center</a></li>
              <li><a href="#!" className="text-reset">Terms of Service</a></li>
              <li><a href="#!" className="text-reset">Legal</a></li>
              <li><a href="#!" className="text-reset">Privacy Policy</a></li>
              <li><a href="#!" className="text-reset">Status</a></li>
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className="col-md-4 col-lg-3 mb-4 order-1 order-md-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h6 className="fw-bold mb-4">Stay up to date</h6> {/* Section title */}
            {/* Newsletter form */}
            <form className="newsletter">
              <div className="input-group">
                <input
                  type="email" // Input type
                  className="form-control" // Bootstrap form control styling
                  placeholder="Your email address" // Placeholder text
                  aria-label="Email" // Accessibility label
                />
                <span className="input-group-text"> {/* Button icon */}
                  <TbSend />
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
