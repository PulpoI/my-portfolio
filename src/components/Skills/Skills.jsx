import React from "react";

import react from "../../assets/icons/001-physics.png";
import javascript from "../../assets/icons/002-js.png";
import css from "../../assets/icons/css.png";
import sass from "../../assets/icons/009-sass.png";
import html from "../../assets/icons/008-html-5.png";
import bootstrap from "../../assets/icons/004-bootstrap.png";
import git from "../../assets/icons/git.png";
import github from "../../assets/icons/003-github.png";
import photoshop from "../../assets/icons/005-photoshop.png";
import xd from "../../assets/icons/006-xd.png";

import "./Skills.css";
import Logo from "../Header/Logo";
const Skills = () => {
  return (
    <>
      <Logo n />
      <div className="slider-container">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={react} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={javascript} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={css} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={sass} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={html} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={bootstrap} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={git} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={github} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={photoshop} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={xd} alt="icon" height={100} width={100} />
            </div>

            <div className="slide">
              <img src={react} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={javascript} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={css} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={sass} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={html} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={bootstrap} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={git} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={github} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={photoshop} alt="icon" height={100} width={100} />
            </div>
            <div className="slide">
              <img src={xd} alt="icon" height={100} width={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
