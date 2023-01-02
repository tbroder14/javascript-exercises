const fibonacci = function(input) {
    let newNumber = 0;
    let array = [1, 0];
    let firstIndex = 0;
    let secondIndex = 1;
    if (input < 0) {
        return "OOPS"
    }
    for (let i = 0; i < (input); i++) {
        newNumber = (array[firstIndex] + array[secondIndex])
        array.push(newNumber)
        firstIndex++
        secondIndex++
    }
    return newNumber;    
};

// 1, 1, 2, 3, 5, 8, 13, 21, 34

// Do not edit below this line
module.exports = fibonacci;
