
const mongoose = require("mongoose")
const connectionString = "mongodb+srv://roberdz30:DmR@cluster0.lu92fqb.mongodb.net/notes?retryWrites=true&w=majority"

// Conexión a Moongose 
mongoose.set('strictQuery', false);
mongoose.connect(connectionString)
    .then(
        () => {
            console.log("Database Connect")
        }).catch((error) => {
            console.log("Error de", error);
        })