const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const connectDB = require("./mongo.js")
const Note = require("./models/Note.js")

// Conexión a MongoDB
connectDB();

app.use(express.json())
app.use(cors())

// let Note = [];

app.get("/", (request, response) => {
    response.send("<h1>Hola, Funciono correctamente</h1>")
})

app.get("/notes", (request, response) => {
    Note.find({}).then(notes => {
        response.json(notes)
        mongoose.connection.close()
    })
})

app.get("/notes/:id", (request, response) => {
    const id = Number(request.params.id)
    const note = Notes.find(note => note.id === id)

    if (note) {
        response.json(note)

    } else {
        response.status(404).end()
    }

})

app.post("/create", (request, response) => {
    const note = request.body



    const newNote = {
        albumId: 1,
        id: note.id,
        title: note.title
    }

    Notes = [...Notes, newNote]
    response.status(201).send("Nota agrega con éxito")
})

app.put("/delete/:id", (request, response) => {
    const id = parseInt(request.params.id)

    const newNotes = Notes.filter((note) => note.id !== id)

    Notes = newNotes
    response.status(201).send("Elemento borrado correctamente")
})

app.use((request, response) => {
    response.status(404).json({
        error: "Not Found"
    })
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

