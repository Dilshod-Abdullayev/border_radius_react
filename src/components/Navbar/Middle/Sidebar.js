import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TiDocumentText, TiVideo } from "react-icons/ti";
import { BiFontSize } from "react-icons/bi";
import { GrRobot } from "react-icons/gr";
import { RxFontStyle } from "react-icons/rx";
import "../../../assets/css/style.css";
import { ButtonContext } from "./Context/ButtonContext";
const Sidebar = () => {
  const { btn } = useContext(ButtonContext);
  return (
    <div className={btn ? "sidebar" : "sidebar__none"}>
      <div className="sidebar__bar-items">
        <Link className="link__route" to="document">
          <button className="sidebar__item">
            <TiDocumentText />
            Document
          </button>
        </Link>
        <Link className="link__route" to="video_tutorial">
          <button className="sidebar__item">
            <TiVideo />
            Video tutorial
          </button>
        </Link>
        <Link className="link__route" to="border_size">
          <button className="sidebar__item">
            <BiFontSize />
            Border Size
          </button>
        </Link>
        <Link className="link__route" to="generator">
          <button className="sidebar__item">
            <GrRobot />
            Border Generator
          </button>
        </Link>
        <Link className="link__route" to="change_style">
          <button className="sidebar__item">
            <RxFontStyle />
            Change Style
          </button>
        </Link>
      </div>
      <div className="sidebar__login">
        <div className="user">
          <img src={""} />
          <span>User</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
