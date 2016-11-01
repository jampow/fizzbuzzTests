"use strict";

const fb = require('../../fizzbuzz.js')
const chai = require('chai')
const expect = chai.expect

let value
let result

module.exports = function() {
    this.Given(/^the value (\d+)$/, function(val) {
        value = val * 1
    })

    this.When(/^passed to fizzbuzz method$/, function() {
        result = fb.fizzbuzz(value)
    })

    this.Then(/^should return (.+)$/, function(res) {
        expect(res).to.be.equal(result)
    })

}
