import React from "react";
import Img from "../../assets/Img/Logo.png";
import '../../assets/css/nav.css'
function Logo() {
  return (
    <>
      <img className="nav__logo" src={Img} />
    </>
  );
}

export default Logo;
