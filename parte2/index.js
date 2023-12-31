const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

let Notes = [
    {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
        albumId: 1,
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
];

app.get("/", (request, response) => {
    response.send("<h1>Hola, Funciono correctamente</h1>")
})

app.get("/notes", (request, response) => {
    response.json(Notes)
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

