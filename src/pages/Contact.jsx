import React from "react";
import "../Contact.css";

function Contacto() {
  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <p>Espero tu consulta para discutir tu próximo proyecto</p>
      <form action="">
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje aquí"
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
