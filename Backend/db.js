// Connect To Mongoose and create
const mongoose = require('mongoose');
const mongoURI='mongodb://localhost:27017/learn'
const connectToMongo= ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to Mongo SucessFully");
    })
}

module.exports = connectToMongo;