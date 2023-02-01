import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Document from "./Document/Document";
import Videos from "./Video/Videos";
import "../../../assets/css/style.css";
import { ButtonContext } from "./Context/ButtonContext";
const Middle = () => {
  const { btn } = useContext(ButtonContext);
  return (
    <div className="main__middle">
      <Sidebar />
      {btn ? (
        <div className="main__middle-routes">
          <Routes>
            <Route path="/" element={<Document />} />
            <Route path="/document" element={<Document />} />
            <Route path="/video_tutorial" element={<Videos />} />
            <Route path="/document" element={<Document />} />
            <Route path="/document" element={<Document />} />
          </Routes>
        </div>
      ) : (
        "Hello text world"
      )}
    </div>
  );
};
export default Middle;