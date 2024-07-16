import React from "react";
import { useNavigate } from "react-router-dom";

const footer = {
  backgroundColor: "black",
  color: "#fff",
  textAlign: "center",
  padding: "20px 0",

  width: "100%",
  bottom: "0",
};

const footerContent = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const footerP = {
  margin: "5px 0",
};

function Footer(props) {
  const navigate = useNavigate();
  const navegarHome = () => {
    navigate("/");
  };
  const navegerContacto = () => {
    navigate("/Contact");
  };
  return (
    <footer style={footer}>
      <div style={footerContent}>
        <p style={footerP}>
          &copy; 2024 Innovare Software. Todos los derechos reservados.
        </p>
        <p style={footerP}>Desarrollo Web</p>
        <button onClick={navegarHome}>Servicio</button>
        <button onClick={navegerContacto}>Contacto</button>
      </div>
    </footer>
  );
}

export default Footer;
