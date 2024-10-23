function searchNo(arrays, num) {
    let flag = 0;
    let count = 0;

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] == num) {
            flag = 1;
            count = i + 1;
            break;
        }
    }

    if (flag == 1) {
        console.log(`The number ${num} was found at position ${count}`);
    } else {
        console.log("Number not found");
    }
}

const arr = [2, 3, 4, 5, 6, 7, 8, 9];

const prompt = require("prompt-sync")();
const num = parseInt(prompt('Enter the number you want to search: '));

searchNo(arr, num);
