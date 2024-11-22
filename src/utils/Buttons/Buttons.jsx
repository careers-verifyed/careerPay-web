import React from "react";
import "./buttons.scss";

const Buttons = ({ textSite, outlineSite, IconTextSite, IconOutlineSite }) => {
  return (
    <>
      {textSite && <button className="bigBtn">{textSite}</button>}
      {outlineSite && <button className="smallBtn">{outlineSite}</button>}
      {IconTextSite && <button className="btnIcon">{IconTextSite}</button>}
      {IconOutlineSite && <button className="btnOutline">{IconOutlineSite}</button>}
    </>
  );
};

export default Buttons;
