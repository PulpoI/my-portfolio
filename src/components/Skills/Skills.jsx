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
              <i className="bx bxl-php"> </i>
              <h3>PHP</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxs-data"></i>
              <h3>MySQL</h3>
            </div>

            <div className="skills-item">
              <i className="bx bxl-javascript"> </i>
              <h3>JavaScript</h3>
            </div>
            <div className="skills-item">
              <svg
                className="bxl-typescript"
                style={{ fill: "white", width: "96px", height: "auto" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74 3 3 0 0 1-1 .39 5.81 5.81 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54 3.06 3.06 0 0 0 1.13.2 2.58 2.58 0 0 0 .6-.06 1.47 1.47 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.24 1.24 0 0 0-.35-.33 3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.09 2.09 0 0 1 .66-.71 2.88 2.88 0 0 1 1-.42 5.11 5.11 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24 3.58 3.58 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.45 2.45 0 0 0-.46 0 2.29 2.29 0 0 0-.56.06 1.54 1.54 0 0 0-.43.16.78.78 0 0 0-.26.25.63.63 0 0 0-.09.33.62.62 0 0 0 .1.35 1.19 1.19 0 0 0 .3.29 2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42 2.65 2.65 0 0 1 .64.49 1.79 1.79 0 0 1 .42.63 2.48 2.48 0 0 1 .14.85 2.68 2.68 0 0 1-.25 1.08z"></path>
              </svg>
              <h3>TypeScript</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-react"> </i>
              <h3>React</h3>
            </div>
            {/* <div className="skills-item">
              <i className="bx bxl-next"> </i>
              <h3>Next.js</h3>
            </div> */}
            <div className="skills-item">
              <i className="bx bxl-redux"> </i>
              <h3>Redux</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-redux"> </i>
              <h3>Redux</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-html5"> </i>
              <h3>HTML</h3>
            </div>
            <div className="skills-item">
              <i className="bx bxl-css3"> </i>
              <h3>CSS</h3>
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
              <i className="bx bxl-tailwind-css"></i>
              <h3>Tailwind</h3>
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
