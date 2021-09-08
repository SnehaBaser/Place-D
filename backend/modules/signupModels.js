const mongoose=require('mongoose');
const signUpTemplate=new mongoose.Schema({
    image:{
        type:String
    },
    files:Object,
    hedu:String,
    sedu:String,
    currYear:String,
    sgpa:Number,
    cgpa:Number,
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    course:{
        type:String
    },
    batch:{
        type:String
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    zip:{
        type:Number
    },
    email:{
        type:String,
        unique:true
    },
 
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Profiles',signUpTemplate);