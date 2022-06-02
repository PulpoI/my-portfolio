import React from "react";
import ReactPlayer from "react-player";
import Header from "../Header/Header";
import video from "../../assets/202206012002.mp4";

import "./Main.css";

const Main = ({ render }) => {
  return (
    <>
      <div className="main color-change-2x">
        <div className="left-main">{render}</div>
        <div className="main-header">
          <Header />
        </div>
        <div className="menu">⇣</div>
      </div>
    </>
  );
};

export default Main;
