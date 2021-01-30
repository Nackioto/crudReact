const express = require('express');
const mongoose = require('mongoose')
const app = express();

const FoodModel = require('./models/Food');

app.use(express.json());

mongoose.connect('mongodb+srv://newUser:Glasgow1234@cluster0.opued.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get('/', async (req, res) => {
    const food = new FoodModel({ foodName: 'Apple', daysSinceIAte: 3 });

    try {
        await food.save();
        res.send('inserted data');
    } catch (err) {
        console.log(err)
    }

});

app.listen(3001, () => {
    console.log("Server Running on Port 3001...")
});