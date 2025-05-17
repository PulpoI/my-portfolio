import Logo from "../../components/Header/Logo";
import "./Experience.css";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import logo_amalgama from "../../assets/icons/amalgamaco_logo.jpg";
import logo_zetenta from "../../assets/icons/zetenta_logo.jpg";
import { Link } from "react-router-dom";

function Experience() {
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
          <h2 className="section-title slide-in-blurred-bl">Experiencia</h2>
          <VerticalTimeline className="slide-in-blurred-bl">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#011a2ca4",
                color: "#fff",
                borderRadius: "1rem",
                padding: "1rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #011a2ca4",
              }}
              date="2024 - presente"
              iconStyle={{
                background: "#011a2ca4",
                color: "#fff",
                display: "flex",
                overflow: "hidden",
              }}
              icon={<img src={logo_amalgama} alt="logo" />}
            >
              <h3 className="vertical-timeline-element-title">
                Desarrollador Web
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a
                  href="https://amalgama.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amalgama
                </a>{" "}
                <a
                  href="https://clazzystudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Clazzy Studio)
                </a>
              </h4>
              <p style={{ marginBottom: "1rem" }}>
                Desarrollo de sitios web, utilizando tecnologías como React,
                Next.js, Wordpress, entre otras.
              </p>
              <Link to={"/projects/amalgama"}>
                <button className="project-button">Trabajos</button>
              </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#011a2ca4",
                color: "#fff",
                borderRadius: "1rem",
                padding: "1rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #011a2ca4",
              }}
              date="2023 - 2024"
              iconStyle={{
                background: "#011a2ca4",
                color: "#fff",
                display: "flex",
                overflow: "hidden",
              }}
              icon={<img src={logo_zetenta} alt="logo" />}
            >
              <h3 className="vertical-timeline-element-title">
                Desarrollador Web
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a
                  href="https://zetenta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zetenta
                </a>
              </h4>
              <p style={{ marginBottom: "1rem" }}>
                Desarrollo de sitios web, utilizando tecnologías como React,
                Next.js, Wordpress, entre otras.
              </p>
              <Link to={"/projects/zetenta"}>
                <button className="project-button">Trabajos</button>
              </Link>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </>
      )}
    </>
  );
}

export default Experience;
