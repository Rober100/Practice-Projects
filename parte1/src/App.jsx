import { useState } from "react";
import "./App.css";
import Mensaje from "./Mensaje";
import List from "./components/List";
import Form from "./components/Form";

const Descripcion = () => {
  return <p>Estoy probando todo de nuevo</p>;
};

function App() {
  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: "Hola Rober querido venis bien",
  });

  const [clicks, setClicks] = useState([]);

  // setInterval(() =>{
  //   updateContador(contador + 1)
  // },1000)

  // const handleClik = (e) => {
  //   const typeBotton = e.target.id;
  //   typeBotton === "Positivo"
  //     ? updateContador(contador + 1)
  //     : updateContador(contador - 1);
  // };

  // const handleReset = () => {
  //   updateContador(0);
  // };

  // const isEven = contador % 2 === 0;
  // const mensajePar = isEven ? "Número Par" : "Número Impar";

  const handleLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1,
      mensaje: "Ultimo click en la Izquierda",
    });
    setClicks((prevClicks) => [...prevClicks, "Left"]);
  };

  const handleRigth = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
      mensaje: "Ultimo click en la derecha",
    });
    setClicks((prevClicks) => [...prevClicks, "Right"]);
  };

  return (
    <>
      <Mensaje color="red" message="Prueba" />
      <Mensaje message="Noches" />
      <Descripcion />
      <h1>A ver ahora</h1>
      {/* <h2>{contador}</h2>
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
      <button onClick={handleReset}>Reset</button> */}

      {counters.left}
      <button onClick={handleLeft}>Izquierda</button>
      <button onClick={handleRigth}>Derecha</button>
      {counters.right}
      <p>Historial de Clicks</p>
      <p>{counters.mensaje}</p>
      <p>{clicks.join(" - ")}</p>
      <p>Clicks Totales: {clicks.length}</p>
      <hr />
      <List />
      <Form />
    </>
  );
}

export default App;
