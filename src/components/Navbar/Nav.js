import React, { createContext, useContext, useState } from "react";
import Logo from "./Logo";
import Side__open from "./Side__open";
import Nav_data from "./Nav_data";
import Dark__mode from "./Dark__mode";
import "../../assets/css/nav.css";
import { RxEyeOpen } from "react-icons/rx";
import { ButtonContext } from "./Middle/Context/ButtonContext";

export const Themecontext = createContext(true);
const Nav = () => {
  const {setBtn, btn} = useContext(ButtonContext)
  const [mode, setMode] = useState(true);
  const handleTheme = () => {
    setMode((prev) => !prev);
  };
  const OpenSide = () => {
    setBtn(!btn)
  };
  return (
    <div className="navbar">
      <div className="nav__left">
        <button onClick={OpenSide} className="sidebar__btn">
          <RxEyeOpen />
          Sidebar
        </button>
        <Logo />
      </div>
      <div className="nav__right">
        <Nav_data />
        <Themecontext.Provider value={mode}>
          <Dark__mode onClick={handleTheme} />
        </Themecontext.Provider>
      </div>
    </div>
  );
};

export default Nav;
