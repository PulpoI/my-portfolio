import Header from "../Header/Header";
import Logo from "../Header/Logo";
import "./About.css";
import photo from "./../../assets/profile-2.png";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
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
          <div className="about-content slide-in-blurred-bl ">
            <div>
              <h2 className="section-title">SOBRE MI</h2>
            </div>
            <div>
              <img className="about-photo" src={photo} alt="" />
            </div>
            <div>
              <h3 className="mt-1">¡Hola! Bienvenido a mi portfolio.</h3>
              <p>
                Soy Desarrollador web, te invito a revisar mis{" "}
                <Link style={{ color: "#c89b48" }} to={"/projects"}>
                  proyectos
                </Link>
                .
              </p>
            </div>
            <div className="mt-1">
              <a
                href="https://drive.google.com/file/d/1rlMv2X09r86xb1pXP7aQhTOrZ1R3Jd0D/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="project-button">Descarga mi CV</button>
              </a>{" "}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default About;
