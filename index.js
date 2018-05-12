console.log("Welcome to the file of code to test!");

var first = parseInt(process.argv[2],10);
var second = parseInt(process.argv[3],10);

console.log(adder(first, second));

function adder(a, b) {
    return a + b;
}
module.exports.adder = adder;

function multiplier(a, b) {
    return a * b;
}
module.exports.multiplier = multiplier;

function disemvowel(string) {
    return string.replace(/[aeiou]/g, '');
}
module.exports.disemvowel = disemvowel;

// returns the string in title case
function titelize(string) {
    stringArr = string.split(' ');
    for (let i = 0; i < stringArr.length; i++) {
        stringArr[i] = stringArr[i].toLowerCase();
        stringArr[i] = stringArr[i][0].toUpperCase() + stringArr[i].substring(1);
    }
    return stringArr.join(' ');
}
module.exports.titelize = titelize;
