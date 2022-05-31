import { useEffect, useState } from "react";
import Logo from "../Header/Logo";
import Loader from "../Loader/Loader";
import "./Projects.css";

import img1 from "../../assets/Animation.gif";
import storeTuco from "../../assets/tuco-remeras.png";

function Projects() {
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
        <>
          <div>
            <h2 className="section-title">PROYECTOS</h2>
          </div>
          <div className="project-content slide-in-blurred-bl">
            {/* <div className="project"></div> */}
            <div className="project-container">
              <h3 className="project-title">Tuco Remeras</h3>
              <img className="project-img" src={storeTuco} alt="" />
              <p className="project-description">
                Tuco Remeras es mi emprendimiento de estampados textiles. El
                desarrollo esta adaptado de una plantilla.
              </p>
            </div>

            <div className="project-container">
              <h3 className="project-title">Tuco Remeras</h3>
              <img className="project-img" src={storeTuco} alt="" />
              <p className="project-description">
                Tuco Remeras es mi emprendimiento de estampados textiles. El
                desarrollo esta adaptado de una plantilla.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
