function repeatString(input, num) {
    let output = ''
    if (num <= -1) {
        return("ERROR");
    }
    for (let i=0; i<num; i++) {
        output = output + input;
    }
    return output;
}

repeatString("hey", 3)
console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
