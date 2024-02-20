const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const connectDB = require("./mongo.js")
const Note = require("./models/Note.js")
const morgan = require("morgan")
// Conexión a MongoDB
connectDB();

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// let Note = [];

app.get("/", (request, response, next) => {
    response.send("<h1>Hola, Funciono correctamente</h1>")
})

app.get("/notes", (request, response, next) => {
    Note.find({}).then(notes => {
        response.json(notes)
        mongoose.connection.close()
    }).catch(err => {
        next(err)
    })
})

app.get("/notes/:id", (request, response, next) => {
    const id = request.params.id

    Note.findById(id).then(note => {
        if (note) {
            response.json(note)

        } else {
            response.status(404).send("No encontramos la nota").end()
        }

    }).catch(err => {
        next(err)
        // console.log(err);
        // response.status(400).send("Hubo un problema al buscar la nota por favor verifique si estas correctos los campos").end()
    })
})

app.post("/create", (request, response) => {
    const note = request.body

    if (!note.content) {
        return response.status(404).json({
            error: "Se requiere el contenido para crear la nota"
        })
    }

    const newNote = new Note({
        content: note.content,
        date: new Date(),
        import: note.import || false
    })

    newNote.save().then(saveNote => {
        response.json(saveNote)
    })


})

// app.put("/delete/:id", (request, response) => {
//     const id = parseInt(request.params.id)

//     const newNotes = Notes.filter((note) => note.id !== id)

//     Notes = newNotes
//     response.status(201).send("Elemento borrado correctamente")
// })

app.use((error, request, response, next) => {
    console.log(error.name)
    response.status(404).json({
        error: "Not Found"
    }).end()
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

