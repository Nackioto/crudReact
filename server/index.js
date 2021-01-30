const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://newUser:Glasgow1234@cluster0.opued.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.listen(3001, () => {
    console.log("Server Running on Port 3001...")
});