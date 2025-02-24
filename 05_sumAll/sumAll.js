const sumAll = function(fromNumber,toNumber) {
    let total = 0;
    if(fromNumber <= 0 || toNumber <= 0 || !Number.isInteger(fromNumber) || !Number.isInteger(toNumber)) {
        return "ERROR";
    }
    if(fromNumber > toNumber){
        let tempNumber = fromNumber;
        fromNumber = toNumber;
        toNumber = tempNumber;

    }
    for(i = fromNumber; i<= toNumber; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
