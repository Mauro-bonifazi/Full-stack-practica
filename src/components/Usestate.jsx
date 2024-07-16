import React, { useState, useEffect } from "react";

function Usestate(props) {
  const [suma, setSuma] = useState(0);

  useEffect(() => {
    console.log("El componente se ha montado");
    return () => console.log("El componente ha sido desmontado");
  }, [suma]);

  const sumar = () => {
    setSuma(suma + 1);
  };

  return (
    <div>
      <button onClick={sumar} aria-label="Increment count">
        agregar de uno
      </button>
      <span>{suma}</span>
    </div>
  );
}

export default Usestate;
