const request = require('supertest')
const baseURL = require('../../env')

describe('Post Request Example', () => {
    it('Success create user', async () => {
        const response = request(baseURL())
            .post('/user')
            .send({
                "id": 123,
                "username": "jaki",
                "firstName": "jaki",
                "lastName": "cat",
                "email": "jaki.cat@gmail.com",
                "password": "jakipush.",
                "phone": "08123456789",
                "userStatus": 1
            })
            
        console.log((await response).status)
        console.log((await response).body)
    })
})