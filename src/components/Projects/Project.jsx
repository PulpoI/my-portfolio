import React, { useState } from "react";
import "./Projects.css";

function Project({
  title,
  photoFront,
  photoBack,
  description,
  linkRepo,
  linkDemo,
}) {
  const [photo, setPhoto] = useState(photoFront);

  function mouseHover() {
    setPhoto(photoBack);
  }
  function backImage() {
    setPhoto(photoFront);
  }
  return (
    <div className="project-container">
      <h3 className="project-title">{title}</h3>
      <img
        onMouseOver={mouseHover}
        onMouseOut={backImage}
        className="project-img"
        src={photo}
        alt={`Imagen del proyecto ${title}`}
      />
      {/* <p className="project-description">{description}</p> */}
      <div className="project-buttons">
        <a href={linkRepo} target="_blank" rel="noreferrer">
          <button className="project-button">Repo</button>
        </a>
        <a href={linkDemo} target="_blank" rel="noreferrer">
          <button className="project-button">Demo</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
