const request = require ("supertest")
const app = require ('../app')
const supertest = require("supertest")

const BASE_URL = '/api/v1/users'
let TOKEN 
let TOKEN2

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

test ("GET -> BASE_URL, should return statusCode 200, res.body.length === 2", async () => {

    const res = await supertest(app)
    .get(BASE_URL)
    .set('Authorization', `Bearer ${TOKEN}`)  

    expect(res.statusCode).toBe (200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(2)

})

test("POST -> 'BASE_URL/LOGIN', should return status code 200, and res body.user.email === user.email", async() => {
    const user ={
        email: user.email,
        password:user.password, 
        phone:user.phone
    }
    const res = await  request(app)
        .post(`${BASE_URL/login}`)
        .send(user)

        
})
