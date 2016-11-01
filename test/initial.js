var chai = require('chai')
var expect = chai.expect
var fb = require('../fizzbuzz.js')

describe('Testing FizzBuzz', function(){
    it('3 should return Fizz', function(){
        expect(fb.fizzbuzz(3)).to.be.equal('Fizz');
    })

    it('4 should return 4', function(){
        expect(fb.fizzbuzz(4)).to.be.equal('4');
    })

    it('5 should return Buzz', function(){
        expect(fb.fizzbuzz(5)).to.be.equal('Buzz');
    })

    it('15 should return FizzBuzz', function(){
        expect(fb.fizzbuzz(15)).to.be.equal('FizzBuzz');
    })
});
