const reverseString = function(toReverse) {
    let newString;
    newString = toReverse.split('').reverse().join('');

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
