"use strict";
function findmaxnum(...numbers) {
    let max = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
const maxNumber = findmaxnum(9, 10, 4, 5, 0, 4, 5);
console.log(maxNumber);
