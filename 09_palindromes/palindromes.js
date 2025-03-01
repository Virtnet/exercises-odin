const palindromes = function (stringCheck) {
    var punctuation = /[\.,?! ]/g;
    cleanedArray = stringCheck.toLowerCase().replace(punctuation,"").split("").join("");
    arrayReversed = cleanedArray.split("").reverse().join("");
    // for(let i = 0 ; i < arrayReversed.length + 1 ; i ++){
    //     if(arrayReversed[i] !== cleanedArray[i] ){
    //         return false;
    //     }
    // }
    // return true;

    return cleanedArray === arrayReversed;

};

// Do not edit below this line
module.exports = palindromes;
