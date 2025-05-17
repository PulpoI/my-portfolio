import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header color-change-2x">
        <nav>
          <ul className="focus-in-contract-bck">
            <li className="text-flicker-in-glow">
              <Link title="Sobre mi" to="/about">
                <span className="flicker-3">{"<"}</span>
                Sobre mi
                <span>{" />"}</span>
              </Link>
            </li>
            <li className="text-flicker-in-glow">
              <Link title="Experiencia" to="/experience">
                <span className="flicker-3">{"<"}</span>
                Experiencia
                <span>{" />"}</span>
              </Link>
            </li>
            <li className="text-flicker-in-glow">
              <Link title="Proyectos" to="/projects">
                <span className="flicker-3">{"<"}</span>
                Proyectos
                <span>{" />"}</span>
              </Link>
            </li>
            <li className="text-flicker-in-glow">
              <Link title="Skills" to="/skills">
                <span className="flicker-3">{"<"}</span>
                Skills
                <span>{" />"}</span>
              </Link>
            </li>
            <li className="text-flicker-in-glow">
              <Link title="Contacto" to="/contact">
                <span className="flicker-3">{"<"}</span>
                Contacto
                <span>{" />"}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="footer-items">
        <div className="footer-item">
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/pablo--duarte/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
        <div className="footer-item">
          <a
            title="Github"
            href="https://github.com/PulpoI"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
