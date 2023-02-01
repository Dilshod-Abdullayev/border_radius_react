import React, { useContext, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "../../assets/css/nav.css";
import { Themecontext } from "./Nav";

const DarkMode = ({ onClick }) => {
  const theme = useContext(Themecontext);
  return (
    <>
      <button className="dark__mode-btn" onClick={onClick}>
        DarkMode
        {theme ? (
          <BsFillMoonFill style={{ fontSize: "30px" }} />
        ) : (
          <BsFillSunFill style={{ fontSize: "30px" }} />
        )}{" "}
      </button>
    </>
  );
};

export default DarkMode;
