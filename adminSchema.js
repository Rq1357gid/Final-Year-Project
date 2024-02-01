const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Role: {
        type: String,
        //required: true,
    },
    Name: {
        type: String,
        //required: true,
    },
    Email: {
        type: String,
        //required: true,
    },
    Password: {
        type: String,
        //required: true,
    }
});

module.exports = mongoose.model('Admin', adminSchema);