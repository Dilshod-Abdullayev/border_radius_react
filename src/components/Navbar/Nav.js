import React from "react";
import Logo from "./Logo";
import Side__open from "./Side__open";
import Nav_data from "./Nav_data";
import Dark__mode from "./Dark__mode";
const Nav = () => {
  return (
    <div>
      <div className="nav__left">
        <Side__open />
        <Logo />
      </div>
      <div className="nav__right">
        <Nav_data />
        <Dark__mode />
      </div>
    </div>
  );
};

export default Nav;
