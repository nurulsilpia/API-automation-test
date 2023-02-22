const { expect } = require('chai')
const request = require('supertest')
const DATA = require('../../data/userData.js')

describe('Post Request Example', () => {
    const response = request('https://petstore.swagger.io/v2')
        .post('/user')
        .send(DATA.CREATE_USER_DATA ) 

    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        expect((await response).body).to.haveOwnProperty(`message`)
        // expect((await response).body).to.haveOwnProperty(`error for report`)
    })

    //reporting in mochaawesome

})