const express = require("express")
const app = express()

app.use(express.json())

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

//const http = require("http")

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/plain" })
//     response.end("Hello World")
// })

app.get("/", (request, response) => {
    response.send("<h1>Hello World</h1>")
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

    const ids = Notes.length

    const newNote = {
        albumId: 1,
        id: ids + 1,
        title: note.title
    }

    Notes = [...Notes, newNote]
    response.status(200).send("Nota agrega con éxito")
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

