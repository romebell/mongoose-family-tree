const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree');

// Shortcut to the mongoose connection
const db = mongoose.connection;

// import models
const User = require('./models/user');

db.once('open', () => {
    // Printing to see what host and port MongoDb is on
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
})

// Log any database errors
db.on('error', (err) => {
    console.error(`Database error: ${err}`)
})

app.get('/', (req, res) => {
    res.send('Mongoose');
});

app.get('/user', (req, res) => {
    // const rome = new User({
    //     name: 'Rome Bell',
    //     email: 'rome.bell@ga.co',
    //     age: 33,
    //     website: 'https://github.com/romebell'
    // });
    User.create({
        name: 'Rome Bell',
        email: 'rome.bell@ga.co',
        age: 33,
        website: 'https://github.com/romebell'
    });
    // db.user.find()
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});