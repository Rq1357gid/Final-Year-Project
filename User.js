const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
});

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 12,
        max: 23,
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an enen number`,
        },
    },
    email:{
        type: String,
        minLength: 15,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema

});

module.exports = mongoose.model("User", userSchema);


//Schema, model, query are the three things in mpongoose