const groomingModel = require("../model/Grooming")

// save a feedBack services ---------------------------
exports.createAgroomingService = async(data)=>{
    const result = await groomingModel.create(data)
    return result;
}