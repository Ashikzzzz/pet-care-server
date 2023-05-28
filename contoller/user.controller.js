
const { createAuserService, loginAuserService } = require("../services/user.services");
const { generateToken } = require("../utils/token");

// save a user -------------------------------
exports.createAuser = async(req, res, next)=>{
    try {
        const data = req.body;
        console.log(data)
        const result = await createAuserService(data)
        console.log(result)
        res.status(200).json({
            status: 'success',
            massage: "User inserted Successfully!",
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
exports.loginAuser = async(req, res, next)=>{
    try {
       
        const {userEmail,password}= req.body  //take data from body
      
        if(!password || !userEmail){         //cheak user email and password exists
            res.status(200).json({
                status: 'failed',
                massage: "Please insert your email and password",
            })
        }

            const user = await loginAuserService(userEmail) // if user exists send db the email

            if(!user){                                      // if not user send response
                res.status(200).json({
                    status: 'failed',
                    massage: "user doesn't exists",
                 
                })
            }

            const isPasswordLegal= user.comparePassword(password, user.password) //comparepassword

            if(!isPasswordLegal){                                         // if password is not valid pass
                res.status(200).json({
                    status: 'failed',
                    massage: "password is incorrect"
                })
            }

            if(user.status != "active"){                             //check user is not active or active
                res.status(200).json({
                    status: 'failed',
                    massage: "user is not active"
                })
            }

            const token = generateToken(user)                         // 8 . generate token

            const {password: pwd, ...others} = user.toObject()      // ignore send password to db when login
      


        res.status(200).json({
            status: 'success',
            massage: "user login Successfully!",
            data: {
                others,
                token
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}