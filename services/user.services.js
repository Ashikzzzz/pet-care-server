const User = require("../models/User")


// save a user services ---------------------------
exports.createAuserService = async(data)=>{
    const result = await User.create(data)
    return result;
}

// login a user 
exports.loginAuserService = async(userEmail)=>{
    const result = await User.findOne({userEmail:userEmail})
    return result;
}