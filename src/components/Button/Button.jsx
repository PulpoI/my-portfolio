import React from "react";

import "./Button.css";

const Button = ({ text }) => {
  return (
    <div className="content__item">
      <button className="button button--mimas">
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Button;
