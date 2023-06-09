const { createAgroomingService } = require("../services/grooming.services");

// save a grooming -------------------------------
exports.createAgrooming = async(req, res, next)=>{
    try {
        const data = req.body;
        const result = await createAgroomingService(data)
        res.status(200).json({
            status: 'success',
            massage: "Grooming data inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}



