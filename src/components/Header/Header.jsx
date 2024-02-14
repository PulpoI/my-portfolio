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
              <Link to="/contact">
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
      <div className="footer-items">
        <a
          href="https://www.linkedin.com/in/pablo--duarte/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="footer-item">
            <i class="bx bxl-linkedin-square"></i>
          </div>
        </a>

        <a href="https://github.com/PulpoI" target="_blank" rel="noreferrer">
          <div className="footer-item">
            <i class="bx bxl-github"></i>{" "}
          </div>
        </a>
      </div>
    </>
  );
};

export default Header;
