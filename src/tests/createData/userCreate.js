const User = require("../../models/User")

const userCreate = async () => {
    
    const user = { 
        firstName:"Daniel",
        lastName: "Garcia",
        email:"daniel3013095156@gmail.com", 
        password:"daniel11234",
        phone:"+573013095156"
    }
    
    await User.create(user)
}

module.exports = userCreate