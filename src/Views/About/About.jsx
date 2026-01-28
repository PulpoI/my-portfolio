import Header from "../../components/Header/Header";
import Logo from "../../components/Header/Logo";
import "./About.css";
import photo from "./../../assets/profile-2.png";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

function About() {
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
          <div className="slide-in-blurred-bl">
            <h2 className="section-title">HOLA!</h2>
          </div>
          <div className="about-content slide-in-blurred-bl ">
            <div>
              {/* <img className="about-photo" src={photo} alt="" /> */}
            </div>
            <div>
              <h3 className="mt-1 mx-2">Bienvenido/a a mi portfolio.</h3>
              <p className="mx-2">
                Soy Desarrollador Full Stack, con más de 3 años de experiencia en el rubro.
                <br />
                 Te invito a revisar mis{" "}
                <Link style={{ color: "#c89b48" }} to={"/projects"}>
                  proyectos {" "}
                </Link>
                y mi {" "}
                <Link style={{ color: "#c89b48" }} to={"/experience"}>
                  experiencia
                </Link>
                .
                </p>
            </div>
            <div className="mt-1">
              {/* <a
                href="https://drive.google.com/file/d/1rlMv2X09r86xb1pXP7aQhTOrZ1R3Jd0D/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="project-button">CV</button>
              </a>{" "} */}
              <Link to={"/projects"}>
                <button className="project-button"> Proyectos</button>
              </Link>{" "}
              <Link to={"/experience"}>
                <button className="project-button"> Experiencia</button>
              </Link>{" "}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default About;
