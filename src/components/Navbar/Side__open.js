import React from "react";
import { RxEyeOpen } from "react-icons/rx";
import '../../assets/css/nav.css'

const SideOpen = () => {
  
  return (
      <button className="sidebar__btn">
        <RxEyeOpen />
        Sidebar
      </button>
  );
};

export default SideOpen;
