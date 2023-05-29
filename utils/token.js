const jwt = require('jsonwebtoken');

exports.generateToken=(userInfo)=>{
const payload = {
    email : userInfo.userEmail,
    role : userInfo.role
}
console.log(payload)

const token = jwt.sign(payload,process.env.SECRET_TOKEN,{
    expiresIn : "1d"
})
return token

}
