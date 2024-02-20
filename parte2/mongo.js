
const mongoose = require("mongoose")
const connectionString = "mongodb+srv://roberdz30:DmR@cluster0.lu92fqb.mongodb.net/appRober?retryWrites=true&w=majority"


// Conexión a Moongose 
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(connectionString)
        console.log("Database Connect")
    } catch (error) {
        console.error("Erro al conectar la base de datos", error)
    }
}

module.exports = connectDB


//mongoose.set('strictQuery', false): Esta línea configura el modo de consulta estricta de Mongoose. En versiones anteriores de Mongoose, el modo de consulta estricta estaba habilitado por defecto, lo que significa que Mongoose generaba una excepción si intentabas realizar una consulta con condiciones no definidas en el esquema del modelo. Sin embargo, a partir de Mongoose 6, el modo de consulta estricta se desactiva por defecto. Esta línea de código deshabilita explícitamente el modo de consulta estricta, asegurando que tu aplicación no genere excepciones cuando realice consultas con condiciones adicionales no definidas en el esquema del modelo.

// albumId: 1,
// id: 1,
// title: "accusamus beatae ad facilis cum similique qui sunt",
// url: "https://via.placeholder.com/600/92c952",
// thumbnailUrl: "https://via.placeholder.com/150/92c952",

// const noteSchema = new Schema({
//     content: String,
//     date: Date,
//     import: Boolean
// })

// const Note = model("Note", noteSchema)

// const note = new Note({
//     content: "Primer nota en mi MongoDb",
//     date: new Date(),
//     import: true
// })

// note.save().then(result => {
//     console.log(result);
//     mongoose.connection.close()
// }).catch(error => {
//     console.log(error);
// })

// Note.find({}).then(result => {
//     console.log(result)
//     mongoose.connection.close()
// })