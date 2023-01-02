const palindromes = function (input) {
    input = input.replace(/[^\w\']|_/g, "");
    input = input.replace(/\s/g, '')
    input = input.toLowerCase()
    console.log(input)
    output = input.split("").reverse().join("");
    if (input == output) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line

module.exports = palindromes;
