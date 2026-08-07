const sumAll = function(firstInt, secondInt) {
    const maxValue = Math.max(firstInt, secondInt);
    const minValue = Math.min(firstInt, secondInt);
    let result = 0;

    if ((firstInt > 0 && secondInt > 0) && (Number.isInteger(firstInt) && Number.isInteger(secondInt))) {
        for (let i = minValue; i <= maxValue; i++) {
            result += i;
        }    
    } else { return 'ERROR' }
    
     return result;
};

// Do not edit below this line
module.exports = sumAll;
