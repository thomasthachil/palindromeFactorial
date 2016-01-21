function palindromeFactorial(arr) {
    "use strict";
    if (!Array.isArray(arr)) {
        throw "Input is not an array.";
    }
    if (arr === null || arr.length === 0) {
        throw "Array is null, undefined, or empty.";
    }
    var counter = 0;
    var word;
    var reverse;
    var i;
    for (i = 0; i < arr.length; i += 1) {
        word = arr[i];
        word = word.replace(/\s/g, '');
        word = word.toLowerCase();
        if (word === null || word.length === 0) {
            throw "One or more of the strings is not valid.";
        }
        reverse = word.split("").reverse().join("");
        if (word === reverse) {
            counter += 1;
        }
    }
    function factorial(num) {
        if (num === 0) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }
    var numPal = factorial(counter);
    return numPal;
}
