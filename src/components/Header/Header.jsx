import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header color-change-2x">
        <nav>
          <ul className="focus-in-contract-bck">
            <a href="">
              <li className="text-flicker-in-glow">
                <span className="flicker-3">{"<"}</span>
                Sobre mi
                <span>{" />"}</span>
              </li>
            </a>
            <a href="">
              <li className="text-flicker-in-glow">
                <span className="flicker-3">{"<"}</span>
                Proyectos
                <span>{" />"}</span>
              </li>
            </a>
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
