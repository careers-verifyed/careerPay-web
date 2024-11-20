import React from "react";
import { Navbar, Footer } from "./Components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

const Display = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Display;
