// require the mongoose module
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
/**
 *  connect to the mongodb server and create a  new database
 * @ staffsDB is the database to be created
 *  @ staffSchema - create a schema to abide
 * @ worker - create a new data collections
 */
try {
    mongoose.connect("mongodb://127.0.0.1:27017/staffsDB", {useNewUrlParser: true}, function(){
    console.log("connected to database server");
    });
} catch (error) {
    console.log(error.message);
}



const staffSchema = new mongoose.Schema({
    name: String,
    position: String,
    age: Number,
    salary:Number
})

const Staff = mongoose.model("Staff", staffSchema);

const name_0 = new Staff({
    name: "Yussuf",
    position: "staff Engineer",
    age: 27,
    salary: 140000
})
// name_0.save();

const name_1 = new Staff({
    name: "olalekan sodiq",
    position: "supervisor",
    age: 36,
    salary: 450000
})



// Staff.insertMany([name_0, name_1], function(err){
//     if (err){
//         console.log(err.message);
//     }else{
//         console.log("successfully added workers")
//     }
// })