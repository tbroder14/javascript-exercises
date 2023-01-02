const reverseString = function(input) {
    let output = input.split("").reverse().join("");
    return output;
};

reverseString('hello')

// Do not edit below this line
module.exports = reverseString;
