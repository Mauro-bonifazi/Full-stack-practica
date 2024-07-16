import React from "react";

function Services(props) {
  const sectionStyle = {
    backgroundColor: "#f9f9f9",
    padding: "2rem",
  };

  const containerStyle = {
    padding: "1rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };
  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <h2>Servicios</h2>
        <ul>
          <li>Diseño y desarrolo de sitios web</li>
          <li>Optimización oara motores de busqueda</li>
          <li>Desarrollo de aplicaciones moviles</li>
          <li>Consultorías técnicas</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
