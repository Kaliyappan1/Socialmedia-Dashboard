const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    field: { type: String, required: true },
    bio: { type: String, required: true },
   
})

const UserModel = mongoose.model("SocialmediaDashboard", UserSchema)

module.exports = UserModel