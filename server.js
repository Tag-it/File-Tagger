const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Image = require('./backend/src/models/Images.js');
const bp = require('body-parser').json();
app.use(cors());
mongoose.connect('mongodb://localhost/tagger')


app.use(bp)

app.post('/image', (req, res) => {
    
    let item = new Image({
        imageURL: req.body.imageURL,
        comments: req.body.comment,
        tags: req.body.tags,
    })
    Promise.all([item.save()])
    .then(img => {
        console.log(img);
        res.json(img);
    })
})

app.listen(PORT, () => {
    console.log('listening on Port: ', PORT);
})

