//
// DEPENDENCIES
//

var assert = require('assert');

//
// FUNCTIONS TO TEST
//

var testFuncs = require("../index.js");


//
// UNIT TESTS
//

// Example from the docs

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

// Adder & multiplier

describe('adder', function () {
    it('should return 5 when called with 2 and 3', function () {
        assert.equal(testFuncs.adder(2, 3), 5);
    });
});

describe('multiplier', function () {
    it('should return 6 when called with 2 and 3', function () {
        assert.equal(testFuncs.multiplier(2, 3), 6);
    });
});

// Disemvowel

describe('disemvowel', function () {
    it('should return bbb when called with "ababab"', function () {
        assert.equal(testFuncs.disemvowel("ababab"), "bbb");
    });

    it('should return bqtrz when called with "bqtrz"', function () {
        assert.equal(testFuncs.disemvowel("bqtrz"), "bqtrz");
    });

    it('should return an empty string when called with "eee"', function () {
        assert.equal(testFuncs.disemvowel("eee"), "");
    });
});


// Titelize

describe('titelize', function () {
    it('should titlecase a string', function () {
        assert.equal(testFuncs.titelize("hello"), "Hello");
    });

    it('should titlecase a string', function () {
        assert.equal(testFuncs.titelize("gOOD MORNiNG!"), "Good Morning!");
    });

    it('should titlecase a string', function () {
        assert.equal(testFuncs.titelize("i am tired and i want to go to bed"), "I Am Tired And I Want To Go To Bed");
    });
});
