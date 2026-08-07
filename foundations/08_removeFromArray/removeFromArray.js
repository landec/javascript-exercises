const removeFromArray = function(arr, ...theArgs) {
    let newArr = [];

    for (let num of arr) {
        if (!(theArgs.includes(num)) && !(newArr.includes(num)))
            newArr.push(num);
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
