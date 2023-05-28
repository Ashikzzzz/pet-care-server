const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 
        userName : {
            type : String,
            required : true
        },
        userEmail : {
            type : String,
            required: true,
        },
        password : {
            type : String,
            required: true
        },
        location:{
            type: String
        },
        role:{
            type: String,
            enum: ["buyer","seller","admin"],
            required: true
        },
        status: {
            type: String,
            enum: ["active","inactive","blocked"]
        }
})

const User = mongoose.model("User",userSchema)


module.exports = User;