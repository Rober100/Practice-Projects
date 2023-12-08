import { useState } from "react";
import "./App.css";
import Mensaje from "./Mensaje";

const Descripcion = () => {
  return <p>Estoy probando todo de nuevo</p>;
};

function App() {
  const [contador, updateContador] = useState(0);

  // setInterval(() =>{
  //   updateContador(contador + 1)
  // },1000)

  const handleClik = (e) => {
    const typeBotton = e.target.id;
    typeBotton === "Positivo"
      ? updateContador(contador + 1)
      : updateContador(contador - 1);
  };

  const handleReset = () => {
    updateContador(0);
  };

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? "Número Par" : "Número Impar";

  return (
    <>
      <Mensaje color="red" message="Prueba" />
      <Mensaje message="Noches" />
      <Descripcion />
      <h1>A ver ahora</h1>
      <h2>{contador}</h2>
      <p>{mensajePar}</p>
      <button
        id="Positivo"
        onClick={(e) => {
          handleClik(e);
        }}
      >
        Incrementar
      </button>
      <button onClick={handleClik}>Decrementar</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
