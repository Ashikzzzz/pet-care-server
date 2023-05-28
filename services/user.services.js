const User = require("../models/User")


// save a user services ---------------------------
exports.createAuserService = async(data)=>{
    const result = await User.create(data)
    return result;
}