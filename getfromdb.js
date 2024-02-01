const express = require('express');
const mongoose = require('./mongoc');
const Student = require('./studentschema');
const Admin = require('./adminSchema');

const app = express();

const port = 3000;
app.listen(port);

app.get('/students', async (req, res) => {

    // const students = Student.find()
    //     console.log(students);
    try {

        const Students = await Student.find()
        res.json(Students)

    } catch (e) {
        console.log(e.message);
    }

});


app.get('/admins', async(req, res) => {

    try{
        const Admins = await Admin.find()
        res.json(Admins)
    }catch(e){
        console.log(e.message);
    }
});