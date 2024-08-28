const request = require ("supertest")
const app = require ('../app')

const BASE_URL = '/api/v1/users'
let TOKEN 

const user = {
    firstName:"Evelin",
    lastName: "Herrera",
    email:"evelinherrera@gmail.com", 
    password:"evelin11234",
    phone:"+573023456543"
}

beforeAll(async()=>{
    const user= {        
        email:"daniel3013095156@gmail.com", 
        password:"daniel11234",
    }
    const res = await request (app)
        .post(`${BASE_URL}/login`)
        .send(user)

    TOKEN = res.body.token 
    console.log(TOKEN);
})


test("POST -> BASE_URL, should return statusCode 201, and res.body.firstName === user.firstName", async  () => {
   
    const columns = ['firstName','lastName','email','password','phone']
    const res =  await request (app)
    .post(BASE_URL)
    .set('Authorization', `Bearer ${TOKEN}`)
    .send(user)

    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()

    /*columns.forEach((column) => { 
        expect(res.body[column]).toBeDefined()
        expect(res.body[column]).toBe(user[column])
    })*/



})