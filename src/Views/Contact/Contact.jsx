import Header from "../../components/Header/Header";
import Logo from "../../components/Header/Logo";
import "../About/About";
import "./Contact.css";
import photo from "./../../assets/profile-2.png";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

function Contact() {
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
          <div className="slide-in-blurred-bl ">
            <h2 className="section-title">CONTACTO</h2>
          </div>
          <div className="about-content slide-in-blurred-bl ">
            <div>
              {/* <img className="about-photo" src={photo} alt="" /> */}
            </div>
            <div>
              <h3 className="mt-1 mx-2">Hablemos...</h3>
              <p className="mx-2">
                Si querés contactarme no dudes en escribirme por el medio que
                prefieras.
              </p>
            </div>
            <div className="contact-items">
              <div className="contact-item">
                <a
                  href="https://www.linkedin.com/in/pablo--duarte/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>
              </div>
              <div className="contact-item">
                <a
                  href="mailto:pablod.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-gmail"></i>{" "}
                </a>
              </div>
              <div className="contact-item">
                <a
                  href="https://api.whatsapp.com/send?phone=542352407827"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-whatsapp"></i>{" "}
                </a>
              </div>
              <div className="contact-item">
                <a
                  href="https://github.com/PulpoI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Contact;
