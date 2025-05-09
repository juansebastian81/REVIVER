// src/components/ScrollDownButton.jsx
import React from "react";
import "./ScrollDownButton.css";

const ScrollDownButton = ({ onClick }) => {
  return (
    <button
      className="scroll-down-button"
      onClick={onClick}
      aria-label="Desplazar hacia abajo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="black"
        viewBox="0 0 24 24"
      >
        <path d="M12 16.5l-8-8 1.41-1.42L12 13.66l6.59-6.58L20 8.5z" />
      </svg>
    </button>
  );
};

export default ScrollDownButton;
