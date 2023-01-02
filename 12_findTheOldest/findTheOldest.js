const findTheOldest = function(people) {
    // subtract year of death from year of birth 
    // return highest number 
    let age = people.map(getAge)
    let oldestObject

    age.map((o, i) => {
        if(i == 0) {
            oldestObject = o
        } else if (oldestObject.yearOfDeath == 0) {
            // let ageAdded = Object.assign(people, ae)
        } else {
            if(oldestObject.age < o.age) {
                oldestObject = o  
            }
        }
    })
    console.log(oldestObject)
    return oldestObject;
};

function getAge(people) {
    let oldest = {age: 0}
    const date = new Date()
    let year = date.getFullYear();
    if(!people.yearOfDeath) {
        let age = {age: (year - people.yearOfBirth)}
        ageAdded = Object.assign(people, age)
    } else {
        age = {age: (people.yearOfDeath - people.yearOfBirth)}
        ageAdded = Object.assign(people, age)
    }
    return ageAdded;
}

// Do not edit below this line
module.exports = findTheOldest;
