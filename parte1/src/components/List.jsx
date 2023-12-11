import { Notes } from "./Notes.jsx";

const Form = () => {


  if (typeof Notes === "undefined" || Notes.length === 0) {
    return "No tenemos notas que mostrar";
  }

  const handleChange = (event) => {
    console.log(event);
  }
  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {Notes.map((notes) => {
          return (
            <li key={notes.id}>
              <p>{notes.content}</p>
              <small>{notes.date}</small>
            </li>
          );
        })}
      </ol>
      <input type="text" onChange={handleChange}/>
      <button>Crear Nota</button>
    </div>
  );
};

export default Form;
