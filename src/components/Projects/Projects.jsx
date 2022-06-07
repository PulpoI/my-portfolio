import { useEffect, useState } from "react";
import Logo from "../Header/Logo";
import Loader from "../Loader/Loader";
import "./Projects.css";

//Fotos
import storeTuco from "../../assets/tuco-remeras.png";
import storeTuco2 from "../../assets/tuco-remeras-back.png";
import cgFoto from "../../assets/cg-fotografia.png";
import cgFoto2 from "../../assets/cg-fotografia-back.png";

import Project from "./Project";

function Projects() {
  const [loading, setLoading] = useState(false);
  // const [photo, setPhoto] = useState(storeTuco);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // function changeImage() {
  //   setPhoto(storeTuco2);
  // }
  // function backImage() {
  //   setPhoto(storeTuco);
  // }
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
            <Project
              title="Tuco Remeras"
              photoFront={storeTuco}
              photoBack={storeTuco2}
              description="Tuco Remeras es mi emprendimiento de estampados textiles. El
              desarrollo esta adaptado de una plantilla."
            />
            <Project
              title="Camila Gonzalez - Fotógrafa"
              photoFront={cgFoto}
              photoBack={cgFoto2}
              description="Tuco Remeras es mi emprendimiento de estampados textiles. El
              desarrollo esta adaptado de una plantilla."
            />
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
