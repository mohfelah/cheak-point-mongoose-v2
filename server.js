const express = require("express")
const connectDB = require("./database/connectDB")
require("dotenv").config()
const users = require("./Users/users")

//users.createAndSavePerson();
//users.createManyPeople();
//users.search("mohamed");
//users.searchByFood("pizza");
//users.searchById("63f4bd8e2649df7e74765e45");
//users.updatePerson("63f4bd8e2649df7e74765e45");
//users.newUpdatePerson("Ali");
//users.removePerson("63f4bdd10887c99cc52b3807");
//users.removeManyPeople("yesmine");
//users.chainSearch();

connectDB()
const app = express()
const PORT = process.env.PORT
app.listen(PORT,(err) =>{
    err ? console.log(err)
    : console.log(`server is running on port ${PORT}`)
})

