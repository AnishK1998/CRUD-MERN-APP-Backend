const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true,
        unique: true
    },
    work: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
  })

const users = new mongoose.model("crud_register_collections",userSchema);

module.exports = users;
