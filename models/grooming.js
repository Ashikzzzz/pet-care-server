const mongoose = require('mongoose');

const groomingSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        required: true,
    },
    userPhone: {
        type: String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    price: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    },
    
})

const grooming = mongoose.model("grooming",groomingSchema)


module.exports = grooming;