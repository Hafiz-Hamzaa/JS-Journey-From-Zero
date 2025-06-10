// Operators and Conditional Statements (This is  a comment)
// Arithmetic Operators
let a = 5
let b = 10
console.log("a + b =", a + b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// Unary Operator
let c = 10
console.log("++c =", ++c)
console.log("--c =", --c)
let d = 30
console.log("d++ =", d++)
console.log("d = ", d);
console.log("d-- =", d--)
console.log("d = ", d);

// Assignment Operator
let e = 23
e += 7
e -= 12
console.log(e);

// Comparision Operator
let f = 80
let g = 100
console.log("80 == 100", f == g)
console.log("80 != 100", f != g)
console.log("80 < 100", f < g)

let h = 12
let i = "12"
console.log(12 === "12", h === i)

// Logical Operator
let j = 120
let k = 200
console.log(j < k && j > k)
console.log(j < k || j > k)
console.log (!(j > k));

// Conditional Statements
// To implement some condition in the code
let mode = "black"
if(mode == "black"){ 
    console.log("Dark Mode")
} else {
    console.log("White Mode")
}

// age check 
let age = 18
if(age == 18 && age < 20) {
    console.log("You can vote")
} else if(age != 18 || age > 18) {
    console.log("You can also vote")
} else {
    console.log("No vote...")
}

// Ternary Operator
let marks = 85
let result = (marks > 80)?"You Passed":"Failed"
console.log(result);

// Practice Ques
// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.
let number = +prompt("Enter a number")
if(number % 5 == 0){
    console.log(`${number} is a multiple of 5`)
}else{
    console.log(`${number} is not a multiple of 5`)
}