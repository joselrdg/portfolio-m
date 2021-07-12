import React from "react";
// import './Neon.css';

export const Neon = ({title, subtitle}) => {
  return (
    <div className="container">
      <h1 className="neonText">{title}</h1>
      <h2 className="neonText">Page Not Found</h2>
    </div>
  );
};
