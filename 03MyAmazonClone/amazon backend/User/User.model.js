const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema ({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    },
    password:{
        type:String
    },
    
})

module.exports = mongoose.model('users',User);