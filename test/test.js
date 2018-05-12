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

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

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

describe('disemvowel', function () {
    it('should return bbb when called with ababab', function () {
        assert.equal(testFuncs.disemvowel("ababab"), "bbb");
    });
});

describe('disemvowel', function () {
    it('should return bqtrz when called with bqtrz', function () {
        assert.equal(testFuncs.disemvowel("bqtrz"), "bqtrz");
    });
});

describe('disemvowel', function () {
    it('should return an empty string when called with eee', function () {
        assert.equal(testFuncs.disemvowel("eee"), "");
    });
});
