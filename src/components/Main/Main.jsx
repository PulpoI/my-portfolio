import React from "react";
import Header from "../Header/Header";

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
