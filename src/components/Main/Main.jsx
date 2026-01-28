import React from "react";

import Header from "../Header/Header";
import HeaderSmartphone from "../Header/HeaderSmartphone";

import "./Main.css";

const Main = ({ render }) => {

  return (
    <>
      <div className="header-smart">
        <HeaderSmartphone />
      </div>
      <div className="main color-change-2x">
        {/* {menuOpen ? ( */}
        <>
          <div className="left-main">{render}</div>
          <div className="main-header ">
            <Header />
          </div>
        </>
        {/* ) : (
          <>
            <div className="left-main">
              <Header />
            </div>
          </>
        )} */}
        <div className="menu">
          {/* <button type="button" onClick={handleMenu}>
            <img src={menu} alt="menu" className="menu-img" />
          </button> */}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Main;
