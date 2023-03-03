import { useEffect, useState } from "react";

//Styles
import "./Projects.css";

//Photos
import Logo from "../Header/Logo";
import storeTuco from "../../assets/tuco-store.png";
import storeTuco2 from "../../assets/tuco-store-back.png";
import tucoRemeras from "../../assets/tuco-remeras.png";
import tucoRemeras2 from "../../assets/tuco-remeras-back.png";
import cgFoto from "../../assets/cg-fotografia.png";
import cgFoto2 from "../../assets/cg-fotografia-back.png";
import donaMarta from "../../assets/dona-marta.png";
import donaMarta2 from "../../assets/dona-marta-back.png";
import creador from "../../assets/creador.png";
import creador1 from "../../assets/creador-back.png";
import presupuestador from "../../assets/presupuestador.png";
import presupuestador1 from "../../assets/presupuestador-back.png";
import turnero from "../../assets/turnero.png";
import turnero2 from "../../assets/turnero-back.png";
import dalp from "../../assets/diseno-a.png";
import dalp2 from "../../assets/diseno-a-back.png";

//Components
import Project from "./Project";
import Loader from "../Loader/Loader";

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
        <div className="project-content slide-in-blurred-bl">
          <div>
            <h2 className="section-title">PROYECTOS</h2>
          </div>

          <div className="project-content ">
            <Project
              title="DALP"
              photoFront={dalp}
              photoBack={dalp2}
              description="Marketplace desarrollado con Wordpress."
              linkRepo="https://github.com/PulpoI/turnero"
              linkDemo="https://dalp.com.ar/"
            />
            <Project
              title="Turnero"
              photoFront={turnero2}
              photoBack={turnero}
              description="E-commerce desarrollado con React.js. Axios,
              Firebase, Bootstrap, React-bootstrap, React-router-dom."
              linkRepo="https://github.com/PulpoI/turnero"
              linkDemo="https://turnero.pulpol.com.ar/"
            />
            <hr />
            <Project
              title="Tuco Store"
              photoFront={storeTuco}
              photoBack={storeTuco2}
              description="E-commerce desarrollado con React.js. Axios,
              Firebase, Bootstrap, React-bootstrap, React-router-dom."
              linkRepo="https://github.com/PulpoI/tucostore"
              linkDemo="https://store.tucoremeras.com.ar/"
            />

            <Project
              title="Presupuestador"
              photoFront={presupuestador}
              photoBack={presupuestador1}
              description="Presupuestador de servicio de Fotografía. Realizado en React.js. Firebase, Bootstrap, React-router-dom."
              linkRepo="https://github.com/PulpoI/presupuestador"
              linkDemo="https://presupuestador.camilagonzalez.ar/"
            />

            <Project
              title="Camila Gonzalez - Fotografa"
              photoFront={cgFoto}
              photoBack={cgFoto2}
              description="Perfil profesional desarrollado con HTML, CSS y SASS. Bootstrap y PHP para recibir los datos del formulario."
              linkRepo="https://github.com/PulpoI/CG-Fotografia"
              linkDemo="https://camilagonzalez.ar/"
            />
            <Project
              title="Creador - Mocked"
              photoFront={creador}
              photoBack={creador1}
              description="Web App para servicio de estampados. Código adaptado con permiso. Leer README para mas info."
              linkRepo="https://github.com/PulpoI/creador-tuco-remeras"
              linkDemo="https://creador.tucoremeras.com.ar/"
            />

            <Project
              title="Doña Marta - Pasteleria artesanal"
              photoFront={donaMarta}
              photoBack={donaMarta2}
              description="Tienda online desarrollada con JavaScript. Bootstrap, emailJs, jQuery, Fetch API, API Pixabay."
              linkRepo="https://github.com/PulpoI/dona-marta"
              linkDemo="https://pulpoi.github.io/dona-marta/"
            />

            <Project
              title="Tuco Remeras"
              photoFront={tucoRemeras}
              photoBack={tucoRemeras2}
              description="Tuco Remeras es mi emprendimiento de estampados textiles. El
              desarrollo esta adaptado de una plantilla."
              linkRepo="https://github.com/PulpoI/tuco-remeras"
              linkDemo="https://tucoremeras.com.ar/"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
