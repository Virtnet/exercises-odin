const getAge = function(p) {
    p.yearOfDeath ??= new Date().getFullYear();
    return p.yearOfDeath - p.yearOfBirth;
}

const findTheOldest = function(arrayOfPersons) {
    const newSortedArray = arrayOfPersons.toSorted(
        (current,next) => getAge(current) - getAge(next)
    );
    oldestPerson = newSortedArray[newSortedArray.length - 1]
    return oldestPerson;
};



// Do not edit below this line
module.exports = findTheOldest;
