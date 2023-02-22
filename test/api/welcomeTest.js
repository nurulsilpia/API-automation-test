const assert = require('chai').assert; 
const app = require('../../assert')

//Asserting -> cara menggunakan assert
describe('Welcome Test',function() {
    it('app should return function message', function() {
        assert.equal(app(),"welcome QA")
    })
})