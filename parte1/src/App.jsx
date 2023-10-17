import "./App.css";
import Mensaje from "./Mensaje";

const Descripcion = () => {
  return <p>Estoy probando todo de nuevo</p>;
};

function App() {
  return (
    <>
      <Mensaje color="red" message="Buenas" />
      <Mensaje message="Noches" />
      <Descripcion />
    </>
  );
}


export default App;
