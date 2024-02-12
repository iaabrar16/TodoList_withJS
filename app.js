const express = require('express');
const mongoose = require('mongoose');

const app = express();

// POST

app.post("/", (req, res) => {
    res.send("POST Method Called")
});

// GET

app.get("/", (req, res) => {
    res.send("GET Method Called")
});

// PUT

app.put("/", (req, res) => {
    res.send("UPDATE Method Called")
});

// DELETE

app.delete("/", (req, res) => {
    res.send("DELETE Method Called")
});

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin12345@cluster0.cghaw53.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('mongodb connected...'))
    .catch((err) => console.log(err))




app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server Started");
})