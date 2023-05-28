const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


const userSchema = new mongoose.Schema({
 
        userName : {
            type : String,
            required : true
        },
        userEmail : {
            type : String,
            required: true,
            unique : [true,"Email already exists"]
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

// check password is hashed 

userSchema.pre("save",function(next){
    const password = this.password
    const hashedPassword = bcrypt.hashSync(password)
    this.password =hashedPassword
    next()

})

userSchema.methods.comparePassword = (password, hash)=>{
    const isPasswordValid = bcrypt.compareSync(password,hash)
    return isPasswordValid
}


const User = mongoose.model("User",userSchema)


module.exports = User;