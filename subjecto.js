const express = require('express');
const mongo = require('./mongoc.js');

const app = express();
const port = 3000;

app.get('/subject', async (req, res) => {

    try{
        const subjecto = await mongo.students.find();
        res.json(subjecto);


    }catch(e){
        res.status(500).json({message:e.message})
    }

});

app.listen(3000, console.log(`listening on ${port}`));