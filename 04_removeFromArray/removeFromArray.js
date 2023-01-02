const removeFromArray = function(theArray, ...theArgs) {
    let numberOfWhatsRemoved = 0; 
    let myArray = theArray;
    for (let i=0; i < (theArgs.length); i++) {
        numberOfWhatsRemoved = theArgs[i];
        numberOfWhatsRemoved = myArray.indexOf(numberOfWhatsRemoved)
        if (numberOfWhatsRemoved === -1) {
            continue;
        } else {
            myArray.splice(numberOfWhatsRemoved, 1)
        }
    }
    return myArray;  
}

// [1, 2, 3, 4] => index position of 3 = 2; index position of 2 = 1 

// Do not edit below this line
module.exports = removeFromArray;
