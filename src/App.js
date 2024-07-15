import "./App.css";
import header from "./components/header";

function App() {
  const saludo = "Hola Mundo";
  return (
    <div className="App">
      <h1>{saludo}</h1>
      <p>Mi nueva aplicación de React en funcionamiento</p>
    </div>
  );
}

export default App;
