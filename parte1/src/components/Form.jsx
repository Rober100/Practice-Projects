import { useState, useEffect } from "react";

const Form = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setNotes(json);
      });
      setLoading(false)
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    const newNoteToState = {
      id: notes.length + 1,
      title: newNote,
      albumId: Math.round(Math.random()),
    };
    setNewNote("");
    setNotes(notes.concat(newNoteToState));
  };

  return (
    <div>
      <div>
        <h1>Notes</h1>
        {loading ? "Cargando...." : ""}
        <ol>
          {notes.map((notes) => {
            return (
              <li key={notes.id}>
                <p>Título: {notes.title}</p>
                <small>Numero de Albúm: {notes.albumId}</small>
              </li>
            );
          })}
        </ol>
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
