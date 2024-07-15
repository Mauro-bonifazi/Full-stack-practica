import React from "react";
import { useState } from "react";

function AdivinaComponents(props) {
  const [numero, setNumer] = useState(1);
  const [sorteo, setSorteo] = useState(0);
  const [result, setResul] = useState(false);
  const sortear = () => {
    const winer = Math.floor(Math.random() * 10) + 1;
    setSorteo(winer);
    setResul(true);
  };
  return (
    <div>
      {!result ? (
        <>
          <h4>Adivina el numero del 1 al 10</h4>
          <input
            type="number"
            value={numero}
            onChange={(e) => setNumer(e.target.value)}
          ></input>
          <button onClick={sortear}>Sortear</button>
        </>
      ) : (
        <>
          <h3>Usted eligio el {numero}</h3>
          <h3>Salio el numero {sorteo}</h3>
          <h3>{sorteo === numero ? "Ha ganado" : "Siga participando"}</h3>
          <br />
          <button
            onClick={() => {
              setResul(false);
              setNumer(1);
            }}
          >
            Volver a jugar
          </button>
        </>
      )}
    </div>
  );
}

export default AdivinaComponents;
