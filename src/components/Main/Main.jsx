import React from "react";
import Header from "../Header/Header";
import photo from "../../assets/perfil.png";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="main color-change-2x">
        <div className="left-main">
          <span className="text-main">
            <span className="text-name text-shadow-drop-br">Pablo Duarte</span>{" "}
            Frontend Developer
          </span>
          <div>
            <img className="photo bounce-in-bck" src={photo} alt="" />
          </div>
        </div>
        <Header />
      </div>
    </>
  );
};

export default Main;
