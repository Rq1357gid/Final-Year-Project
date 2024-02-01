const { studentdata, admindata } = require('./servera');
const Student = require('./studentschema');
const Admin = require('./adminSchema');
const mongoc = require('./mongoc');

run();

async function run() {
    try {
        // console.log(studentdata);
        // console.log(admindata);

        studentdata.map(async (studentdata) => {

            const student = Student.create(studentdata)

        });

        admindata.map(async (admindata) => {

            const admin = Admin.create(admindata)

        });


        // Data.map(async (data) => {
        //     console.log(data);
        //     const excelData = await Student.create(data);
        //     await excelData.save();.then(() => console.log(excelData));

        // });


    } catch (e) {
        console.log(e.message);
    }
}

//console.log(Data);












// const { studentdata, admindata } = require('./servera');
// const Student = require('./studentschema');
// const Admin = require('./adminSchema');
// const mongoc = require('./mongoc');

// run();

// async function run() {
//     try {
//         // Handle student data
//         await Promise.all(studentdata.map(async (data) => {
//             try {
//                 const student = new Student(data); // Create an instance of the model
//                 await student.save();
//             } catch (error) {
//                 console.log(`Error creating student: ${error.message}`);
//             }
//         }));

//         // Handle admin data
//         await Promise.all(admindata.map(async (data) => {
//             try {
//                 const admin = new Admin(data); // Create an instance of the model
//                 await admin.save();
//             } catch (error) {
//                 console.log(`Error creating admin: ${error.message}`);
//             }
//         }));
//     } catch (e) {
//         console.log(`General error: ${e.message}`);
//     }
// }
