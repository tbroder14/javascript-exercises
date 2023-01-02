const caesar = function(input, shift) {
    let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'

    mysteryMessage = input.split("")
    let codedMessage = ''

    mysteryMessage.map((letter) => {

        if(isThisALetter(letter)) {
            let alphabet = isThisLower(letter) ? lowerAlphabet : lowerAlphabet.toUpperCase()
            let indexOfAlphabet = alphabet.indexOf(letter) + shift
            if (indexOfAlphabet > 25) {
                indexOfAlphabet = indexOfAlphabet % 26 
                codedMessage += alphabet[indexOfAlphabet] 
            } else if (indexOfAlphabet < 0) {
                indexOfAlphabet = recursiveAddition(indexOfAlphabet)
                codedMessage += alphabet[indexOfAlphabet]
            } else {
                codedMessage += alphabet[indexOfAlphabet]
            }
        } else {
            codedMessage += letter
        }
    })

    return codedMessage

    function isThisALetter(letter) {
        return letter.match(/[a-zA-Z]/i) !== null
    }

    function isThisLower(letter) {
        return letter == letter.toLowerCase()
    }

    function recursiveAddition(startingNumber) {
        let numberInRange = startingNumber + 26
        if (numberInRange >= 0 ) {
            return numberInRange
        } else {
            recursiveAddition(numberInRange)
        }
    }

//     let finalString = ''
//     let newShift
//     const string = input.split("");
//     console.log(string)
//     newShift = updateShift(shift)   

//     for (let i=0; i < input.length; i++) {
//         let letter = string[i].charCodeAt()
//         // this checks to see if the charCode is a letter or punctuation/space 
//         if ((((65 <= letter) && (letter <= 90))) || (((97 <= letter) && (letter <= 122)))) {
//             letter = newShift + string[i].charCodeAt(); 
//             // Checks to see if new letter (with shift) is still within the letter buckets
//             if ((((65 <= letter) && (letter <= 90))) || (((97 <= letter) && (letter <= 122)))) {
//                 finalString += String.fromCharCode(letter)
//             } // checks to see if letter mix is less than or greater to the borders of the letter buckets  
//             else if ((newShift + letter <= 65) && (newShift + letter >= 90)) {
//                 letter = letter - 26
//                 finalString += String.fromCharCode(letter)
//             } else if ((newShift + letter >= 97) && (newShift + letter <= 122)) {
//                 letter = letter - 26
//                 finalString += String.fromCharCode(letter)
//             } else {
//                 continue;
//             } 
//         // if charCode is outside of a letter, directly add space/punctuation to finalString 
//         } else {
//             finalString += String.fromCharCode(letter)
//             }
//     } return finalString;
// };

// function updateShift (shift) {
//     let newShift
//     if (shift > 26) {
//         newShift = shift % 26
//     } else if (shift < -26) {
//         Math.abs(shift) 
//         shift = shift % 26
//         newShift = shift
//     } else {
//         newShift = shift
//     }
//     return newShift; 
} 
// Do not edit below this line
module.exports = caesar;
