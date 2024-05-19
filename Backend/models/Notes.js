// mongoose schema to create notes

const mongoose= require('mongoose');
const NotesSchema = mongoose.Schema({
     user:{
        type:mongoose.Schema.Types.ObjectId,  //like foreign key
        ref:'user'
     },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const User = mongoose.model('notes',NotesSchema);

module.exports = User;