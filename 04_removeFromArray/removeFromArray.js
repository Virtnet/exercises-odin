const removeFromArray = function(givenArray, ...toRemove) {
    let newArray = []
    for (i = 0; i < givenArray.length; i++){
        if (!(toRemove.includes(givenArray[i]))){
            newArray.push(givenArray[i])
        }
    }
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
