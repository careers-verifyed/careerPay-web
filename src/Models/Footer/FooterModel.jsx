import React from "react";
import "./footer.scss";
import {
  FaInstagram,
  FaDribbble,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import { Logo } from "../../assets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="dFooter">
      <div className="container text-center text-md-start mt-5">
        <div className="row">
          {/* Logo and Social Links */}
          <motion.div
            className="col-md-3 col-lg-4 mb-4 text-center text-md-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="logoDiv mb-4">
              <img src={Logo} alt="Company Logo" />
            </div>
            <p>Copyright © 2024 Careers Verified.</p>
            <p>All rights reserved</p>
            <div className="socials d-flex justify-content-center justify-content-md-start">
              <motion.a
                href="#!"
                className="me-4 text-reset social-icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#!"
                className="me-4 text-reset social-icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaDribbble />
              </motion.a>
              <motion.a
                href="#!"
                className="me-4 text-reset social-icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaSquareXTwitter />
              </motion.a>
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

          {/* Company Links */}
          <motion.div
            className="col-md-2 col-lg-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h6 className="fw-bold mb-4">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-reset">About us</a></li>
              <li><a href="#!" className="text-reset">Blog</a></li>
              <li><a href="#!" className="text-reset">Contact us</a></li>
              <li><a href="#!" className="text-reset">Pricing</a></li>
              <li><a href="#!" className="text-reset">Testimonials</a></li>
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            className="col-md-3 col-lg-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h6 className="fw-bold mb-4">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-reset">Help Center</a></li>
              <li><a href="#!" className="text-reset">Terms of Service</a></li>
              <li><a href="#!" className="text-reset">Legal</a></li>
              <li><a href="#!" className="text-reset">Privacy Policy</a></li>
              <li><a href="#!" className="text-reset">Status</a></li>
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className="col-md-4 col-lg-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h6 className="fw-bold mb-4">Stay up to date</h6>
            <form className="newsletter">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  aria-label="Email"
                />
                <span className="input-group-text">
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
