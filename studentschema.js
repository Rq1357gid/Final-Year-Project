const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    Role: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        minLength: 8,
        lowercase: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Year: {
        type: Number,
    },
    Roll_Number: {
        type: Number,
        unique: true,
    },
    Data_Structure_and_Algorithm: Number,
    Machine_Learning: Number,
    Linux: Number,

});

module.exports = mongoose.model("Student", studentSchema);