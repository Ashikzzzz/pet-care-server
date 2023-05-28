const groomingModel = require("../models/grooming")

// save a feedBack services ---------------------------
exports.createAgroomingService = async(data)=>{
    const result = await groomingModel.create(data)
    return result;
}