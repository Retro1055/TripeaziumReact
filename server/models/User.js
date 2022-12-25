const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
})

const user = mongoose.model("user", userSchema);
module.exports = user;