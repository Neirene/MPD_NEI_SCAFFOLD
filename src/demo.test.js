// Load the assertion library
var chai = require('chai'),
should = chai.should();

describe('Hello world example', function() {

// This should pass
it('should be a string', function() {
var hello_world = 'hello world';
hello_world.should.be.a('string');
});

// This should pass
it('should have length of 11', function() {
var hello_world = 'hello world';
hello_world.should.have.length(11);
});



});