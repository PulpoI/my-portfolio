import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import HeaderSmartphone from "../Header/HeaderSmartphone";

import menu from "../../assets/menu.png";

import "./Main.css";
import { Footer } from "../Footer/Footer";

const Main = ({ render }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
