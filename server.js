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

app.get('/image', (req, res) => {
    Image.find({})
    .then(data => {res.json(data)})
})

app.delete('/image/:id', (req, res) => {
    console.log(req.params)
    Image.deleteOne({_id:req.params.id})
    .then(data => res.json('delete successful'))
}) 

app.listen(PORT, () => {
    console.log('listening on Port: ', PORT);
})

