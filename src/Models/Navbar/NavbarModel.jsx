import React from "react";
import { Logo } from "../../assets";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavbarBrand = () => (
  <Link className="navbar-brand me-2" to="/" aria-label="Home">
    <img src={Logo} alt="Company Logo" />
  </Link>
);

const NavbarToggle = () => (
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarContent"
    aria-controls="navbarContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <HiOutlineMenuAlt1 size="1.5em" />
  </button>
);

const NavbarLinks = ({ links }) => (
  <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
    {links.map((link, index) => (
      <motion.li
        className="nav-item"
        key={index}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className={`nav-link ${index === 0 ? "active" : ""}`}
          to={link.path}
        >
          {link.name}
        </Link>
      </motion.li>
    ))}
  </ul>
);

const NavbarButtons = () => (
  <div className="navLast d-flex align-items-center">
    <motion.button
      type="button"
      className="loginBtn btn btn-link px-3 me-3"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Login
    </motion.button>
    <motion.button
      type="button"
      className="signupBtn btn btn-primary me-3"
      whileHover={{
        backgroundColor: "#4d4d4d",
        color: "#fff",
        scale: 1.1,
      }}
      whileTap={{ scale: 0.95 }}
    >
      Sign up
    </motion.button>
  </div>
);

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Testimonial", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-light">
      <div className="container">
        <NavbarBrand />
        <NavbarToggle />
        <motion.div
          className="collapse navbar-collapse"
          id="navbarContent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <NavbarLinks links={navLinks} />
          <NavbarButtons />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
