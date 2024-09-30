const prompt = require("prompt-sync")();

const java = parseInt(prompt('Enter the Java marks: '));
const database = parseInt(prompt('Enter the Database system marks: '));
const web = parseInt(prompt('Enter the Web Development marks: '));
const ot = parseInt(prompt('Enter the Optimal Technology marks: '));

let obtained_marks = java+database+web+ot
let total_marks = 400;
let percentage;
percentage = (obtained_marks / total_marks) * 100;

if(java > 45 && database > 45 && web > 45 &&  ot > 45){  
    console.log("percentage are : "+ percentage.toFixed(2))

    if (percentage > 80) {
        console.log("Grade: O");
    } else if (percentage > 70) {
        console.log("Grade: A");
    } else if (percentage > 60) {
        console.log("Grade: B");
    } else if (percentage > 50) {
        console.log("Grade: C");
    } else {
        console.log("Grade: D");
    }
}else{
    console.log("Tou Failed the ExamYour Percentages is : " + percentage.toFixed(2))
}