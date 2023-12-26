import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/notes")
      .then((response) => {
        setNotes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching notes:", error);
      });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNoteToState = {
      id: uuidv4(),
      title: newNote,
      albumId: Math.round(Math.random()),
    };
    setNewNote("");
    axios
      .post("http://localhost:3001/create", newNoteToState)
      .then((response) => {
        console.log(response);
        window.alert("Nota envida con éxito");
      })
      .catch((error) => {
        console.log("Error creating note:", error);
      });
    setNotes([...notes, newNoteToState]);
  };

  const handleDelete = (id) => {
    axios.put(`http://localhost:3001/delete/${id}`).then((response) => {
      console.log(response);
      setNotes(notes.filter((note) => note.id !== id));
    });
  };

  return (
    <div>
      <div>
        <h1>Notes</h1>
        {loading ? "Cargando......" : ""}
        <section>
          <ol>
            {notes.map((notes) => {
              return (
                <li key={notes.id}>
                  <p>Título: {notes.title}</p>
                  <small>Numero de Albúm: {notes.albumId}</small>
                  <button onClick={() => handleDelete(notes.id)}>
                    Eliminar
                  </button>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
      <h1>Crea tu propia Nota</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newNote} onChange={handleChange} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
};

export default Form;
