import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header color-change-2x">
        <nav>
          <ul className="focus-in-contract-bck">
            <Link to="/about">
              <li className="text-flicker-in-glow">
                <span className="flicker-3">{"<"}</span>
                Sobre mi
                <span>{" />"}</span>
              </li>
            </Link>
            <Link to="/projects">
              <li className="text-flicker-in-glow">
                <span className="flicker-3">{"<"}</span>
                Proyectos
                <span>{" />"}</span>
              </li>
            </Link>
            <a href="">
              <li className="text-flicker-in-glow">
                <span className="flicker-3">{"<"}</span>
                Skills
                <span>{" />"}</span>
              </li>
            </a>
            <a href="">
              <li className="text-flicker-in-glow">
                <span className="flicker-3">{"<"}</span>
                Contacto
                <span>{" />"}</span>
              </li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
