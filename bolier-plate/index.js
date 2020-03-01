const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://zenaislee:nodereact@youtubeclone-0hmas.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnitfiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));