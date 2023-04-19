const mongoose = require("mongoose");
const MONGODB_PATH = process.env.MONGODB_URL

const mongoDbPath = MONGODB_PATH;

mongoose.connect(mongoDbPath,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("DB Connected Sucessfully")).catch((error) => console.log("DB Connection error ",error))

