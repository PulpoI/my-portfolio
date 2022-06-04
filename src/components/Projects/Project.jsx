import React, { useState } from "react";
import "./Projects.css";

function Project({ title, photoFront, photoBack, description }) {
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
      <p className="project-description">{description}</p>
    </div>
  );
}

export default Project;
