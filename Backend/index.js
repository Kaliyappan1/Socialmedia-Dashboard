const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const UserModel = require('./Models/UsersSchema')

 const app = express()
 app.use(cors())
 app.use(express.json())

 mongoose.connect(process.env.URI) 
 .then(() => console.log("DB connected"))
 .catch(err =>console.error("DB not connect"));

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users = res.json(users))
    .catch (err => {
        console.error("error fetching users:");
        res.status(500).json({error: "Internal server error"})
    })
})

const PORT = process.env.PORT || 3000
 app.listen(PORT, () => {
    console.log("server is running", PORT);
 })

 