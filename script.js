const mongoose = require('mongoose');
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb");

// mongoose.connect("mongodb://localhost/testdb",()=>{
//     console.log("connected to db");
// },                                //that code dose'nt work because callback function is not allowed in mongoose.
//e => console.log(e);

run();
console.log("done");
async function run() {  //(console.log(e.error.age) --> this can give specific info about why error occured on age, just for an example.)

    try { //const user = await user.findById("65ae4a4050f9ecf0fe310267")

        const user = await User.create({
            name: "testuser4",
            age: 18,
            email: "TEST@example.com",
            hobbies: ["cycling", "horse riding"],
            address: {
                street: "Main Street",
                city: "Nazareth"
            }
        });

        await user.save();
        // const user = new User({ name: "testuser", age: 19 })
        // await user.save();
        console.log(user);

    } catch (e) {
        console.log(e.message);
    }

}
