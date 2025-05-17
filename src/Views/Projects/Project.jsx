import React, { useState } from "react";
import "./Projects.css";

function Project({
  title,
  photoFront,
  photoBack,
  description,
  linkRepo,
  linkDemo,
  linkSite,
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
      <div className="project-text">
        <h3 className="project-title">{title}</h3>
        {description && (
          <p className="project-description">{description}</p>
        )}
      </div>
      {photo && (
        <img
          onMouseOver={mouseHover}
          onMouseOut={backImage}
          className="project-img"
          src={photo}
          alt={`Imagen del proyecto ${title}`}
        />
      )}

      <div className="project-buttons">
        {linkSite && (
          <a href={linkSite} target="_blank" rel="noreferrer">
            <button className="project-button">Site</button>
          </a>
        )}
        {linkDemo && (
          <a href={linkDemo} target="_blank" rel="noreferrer">
            <button className="project-button">Demo</button>
          </a>
        )}
        {linkRepo && (
          <a href={linkRepo} target="_blank" rel="noreferrer">
            <button className="project-button">Code</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
