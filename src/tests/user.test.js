const User = require ("../models/User")
const BASE_URL = '/api/v1/users'

const user = {
    firstName:"Evelin",
    lastName: "Herrera",
    email:"evelinherrera@gmail.com", 
    password:"evelin11234",
    phone:"+573023456543"
}


test("POST -> BASE_URL, should return statusCode 201, and res.body.firstName === user.firstName", async  () => {
    const user = await User.findAll()

    console.log(user)
    
})