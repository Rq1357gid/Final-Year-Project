const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


// try {

//     mongoose.connect("mongodb://localhost:27017/testingexcel");
//     console.log('connected to DB');

// } catch (e) {
//     console.log(e.message);
// }
//............................................................

(async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to DB');
    }catch(e){
        console.log(e.message);
    }
})();


module.exports = mongoose;