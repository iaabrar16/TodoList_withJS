const express = require('express');
const mongoose = require('mongoose');
const todoRouter = require('./routers/todo_router')


const app = express();
app.use(express.json())

app.use("/", todoRouter);


mongoose.connect('mongodb+srv://admin:admin12345@cluster0.cghaw53.mongodb.net/workshop2023?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err))




app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server Started...");
})