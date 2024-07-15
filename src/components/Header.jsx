import React from "react";
const headerStyle = {
  textAlign: "center",
  backgroundColor: "black",
  padding: "20px",
  borderBottom: "2px solid #ccc",
};

const titleStyle = {
  fontSize: "2.5rem",
  color: "white",
};

const subtitleStyle = {
  fontSize: "1.5rem",
  color: "#666",
};
const titulo = "Innovare Software";

function Header() {
  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>{titulo}</h1>
      <p style={subtitleStyle}>Desarrollo Web</p>
    </div>
  );
}

export default Header;
