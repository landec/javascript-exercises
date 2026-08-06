const reverseString = function(string) {
    string = string.split("");
    let newString = [];
    string.map((piece) => newString.unshift(piece));
    return newString.join("");

};

// Do not edit below this line
module.exports = reverseString;
