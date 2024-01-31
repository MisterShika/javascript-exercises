const findTheOldest = function(peopleInput) {
    const peopleList = peopleInput;
    const currentYear = new Date().getFullYear();
    let topPerson;
    let topPersonAge = 0;
    peopleList.forEach(person => {
        if (!person.yearOfDeath){
            person.yearOfDeath = currentYear;
        }
        let personAge = person.yearOfDeath - person.yearOfBirth;
        console.log(`${person.name} is ${personAge}`);
        if(personAge > topPersonAge){
            topPerson = person;
            topPersonAge = personAge;
        }
    });
    return topPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
