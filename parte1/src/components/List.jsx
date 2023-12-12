import { useState } from "react";

const Form = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  if (typeof notes === "undefined" || notes.length === 0) {
    return "No tenemos notas que mostrar";
  }

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

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Mostrar solo importante" : "Mostrar todo"}
      </button>
      <ol>
        {notes
          .filter((note) => {
            if (showAll) return note;
            return note.import === true;
          })
          .map((notes) => {
            return (
              <li key={notes.id}>
                <p>Título: {notes.title}</p>
                <small>Numero de Albúm: {notes.albumId}</small>
              </li>
            );
          })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newNote} onChange={handleChange} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
};

export default Form;
