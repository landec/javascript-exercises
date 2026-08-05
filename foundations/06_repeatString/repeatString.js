const repeatString = function(text, numOfTimes) {
    let finalString = "";
    if (numOfTimes < 0) { return 'ERROR' }
    for (let i = 0; i < numOfTimes; i++) {
         finalString += text;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
