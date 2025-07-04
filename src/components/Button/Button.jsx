import React from "react";
import "./Button.css";

const Button = ({
  text,
  onClick,
  styleType = "primary",
  disabled = false,
  icon,
}) => {
  return (
    <button
      className={`btn ${styleType}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="btn-content">
        {icon && <span className="btn-icon">{icon}</span>}
        <span className="btn-text">{text}</span>
      </div>
    </button>
  );
};

export default Button;