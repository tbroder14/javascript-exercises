const sumAll = function(first, last) {
    let finalSum = 0;
    if (typeof first != 'number' || typeof last != 'number') {
        return "ERROR"; 
    } else if (first <= -1 || last <= -1) {
        return "ERROR";
    } else if (first < last) {
        for (let i = first; i <= last; i++) {
            finalSum += i;
        }
    return finalSum;
    } else if (last < first) {
        for (let i = last; i <= first; i++) {
            finalSum += i;
        }
    return finalSum;
    } else if (finalSum <= -1) {
        return "ERROR"
    }
}

// Do not edit below this line
module.exports = sumAll;

