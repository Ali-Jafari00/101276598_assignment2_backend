const mongoose = require("mongoose");

// Define schema
const Schema = mongoose.Schema;

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const employee = new Schema({
    id:  String,
    firstName: String,
    lastName:   String,
    emailId: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill with a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill with a valid email address']
    }
});

// Compile model from schema
var employeeModel = mongoose.model('Employee', employee );
module.exports = employeeModel;