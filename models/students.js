const mongoose=require('mongoose');
const validator=require('validator');
const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3

    },
    contact : {
        type: Number,
        min :6,
        required:true
    },

    subjects :[{body : String}],
    class :{
        type: Number,
        required:true,
    },
    society : [{ body: String }],
    year : {
        type: Number,
        min :4,
        required:true
    },
    
});
  const Student=new mongoose.model('Student',studentSchema);
  module.exports =Student;
