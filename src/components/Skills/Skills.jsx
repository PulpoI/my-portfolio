import React, { useEffect, useState } from "react";

import "./Skills.css";
import Logo from "../Header/Logo";
import Loader from "../Loader/Loader";
const Skills = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <>
      <Logo />
      {loading ? (
        <Loader />
      ) : (
        <div className="slide-in-blurred-bl">
          <div>
            <h2 className="section-title text-center">SKILLS</h2>
          </div>

          <div className="skills-container slide-in-blurred-bl">
            <div className="skills-item">
              <i className="bx bxl-html5"> </i>
              <h3>HTML</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-css3"> </i>
              <h3>CSS</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-javascript"> </i>
              <h3>JavaScript</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-react"> </i>
              <h3>React</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-redux"> </i>
              <h3>Redux</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-jquery"> </i>
              <h3>jQuery</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-sass"> </i>
              <h3>SASS</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-bootstrap"> </i>
              <h3>Bootstrap</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-git"> </i>
              <h3>GIT</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-github"> </i>
              <h3>GitHub</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-wordpress"> </i>
              <h3>WordPress </h3>
            </div>
          </div>

          {/* <div className="slider-container slide-in-blurred-bl">
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img src={react} alt="icon" height={100} width={100} />
                  <h3>React.js</h3>
                </div>
                <div className="slide">
                  <img src={javascript} alt="icon" height={100} width={100} />
                  <h3>JavaScript</h3>
                </div>
                <div className="slide ">
                  <img src={css} alt="icon" height={100} width={100} />
                  <h3>CSS3</h3>
                </div>
                <div className="slide">
                  <img src={sass} alt="icon" height={100} width={100} />
                  <h3>SASS</h3>
                </div>
                <div className="slide">
                  <img src={html} alt="icon" height={100} width={100} />
                  <h3>HTML5</h3>
                </div>
                <div className="slide">
                  <img src={bootstrap} alt="icon" height={100} width={100} />
                  <h3>Bootstrap</h3>
                </div>
                <div className="slide">
                  <img src={git} alt="icon" height={100} width={100} />
                  <h3>Git</h3>
                </div>
                <div className="slide">
              
                  <img src={github} alt="icon" height={100} width={100} />
                  <h3>Github</h3>
                </div>
                <div className="slide">
                  <img src={photoshop} alt="icon" height={100} width={100} />
                  <h3>Photoshop</h3>
                </div>
                <div className="slide">
                  <img src={xd} alt="icon" height={100} width={100} />
                  <h3>XD</h3>
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
          </div> */}
        </div>
      )}
    </>
  );
};

export default Skills;
