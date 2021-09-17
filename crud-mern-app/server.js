const express = require('express')
const app = express();
const port = 3000
const mongoose = require('mongoose')

app.get("/", (req, res) => {
    res.send(`Hello J`)
})

//connecting to mongoDB
mongoose.connect('mongodb+srv://dbcrud:dbcrud@cluster0.55uky.mongodb.net/ItemsDB?retryWrites=true&w=majority')
    .then(() => { console.log(`Connected to database`) })
    .catch(err => console.error(err.message))

//Data Schema
const ItemsSchema = {
    title: String,
    discription: String,
}

//data model
const Item = mongoose.model('Item', ItemsSchema)

//read route
app.get('/items', async (req, res) => {
    try {
        const items_get = await Item.find();
        res.json(items_get)
    } catch (error) {
        console.log(error.message);
    }
})



app.listen(port, () => {
    console.log(`It's alive on http://localhost:${port}/`);
})