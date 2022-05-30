import Header from "../Header/Header";
import Logo from "../Header/Logo";
import "./About.css";
import photo from "./../../assets/profile.png";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

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
          <div className="about-content slide-in-blurred-bl">
            <div>
              <h3>
                Soy de <strong>Chacabuco</strong>, Ciudad ubicada en la
                Provincia de
                <strong> Buenos Aires, Argentina.</strong>
              </h3>
              <h4>
                Creativo y detallista a la hora de realizar aplicaciones web
                para asegurar la experiencia del usuario. <br /> Fanático de la
                tecnología y con ganas de crecer en el mundo de la Programación.{" "}
                <br /> Busco un empleo donde pueda dar lo mejor y crecer
                profesionalmente.
              </h4>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default About;
