import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header color-change-2x">
        <nav>
          <ul className="focus-in-contract-bck">
            <NavDropdown.Item href="#">
              <Link to="/about">
                <li className="text-flicker-in-glow">
                  <span className="flicker-3">{"<"}</span>
                  Sobre mi
                  <span>{" />"}</span>
                </li>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Link to="/projects">
                <li className="text-flicker-in-glow">
                  <span className="flicker-3">{"<"}</span>
                  Proyectos
                  <span>{" />"}</span>
                </li>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Link to="/skills">
                <li className="text-flicker-in-glow">
                  <span className="flicker-3">{"<"}</span>
                  Skills
                  <span>{" />"}</span>
                </li>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Link to="/">
                <li className="text-flicker-in-glow">
                  <span className="flicker-3">{"<"}</span>
                  Contacto
                  <span>{" />"}</span>
                </li>
              </Link>
            </NavDropdown.Item>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
