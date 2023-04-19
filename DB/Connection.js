const mongoose = require("mongoose");
const mongoDbPath = "mongodb+srv://anishsingh199804:anish1998@cluster0.2irmxyv.mongodb.net/crud_register_db?retryWrites=true&w=majority";

mongoose.connect(mongoDbPath,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("DB Connected Sucessfully")).catch((error) => console.log("DB Connection error ",error))

