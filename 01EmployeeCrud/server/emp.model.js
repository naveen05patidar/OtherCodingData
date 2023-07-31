const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Emp = new Schema ({
    emp_ecode: {
        type: Number
    },
    emp_ename : {
        type: String
    },
    emp_esal : {
        type:Number
    }
},
{
    collection: 'emp'
});

module.exports = mongoose.model('Emp', Emp);