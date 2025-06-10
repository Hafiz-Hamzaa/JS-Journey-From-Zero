// Mini-Project
// Simple Calculator
let num1 = +prompt("Enter a first number")
let opeartor = prompt("Enter operator (+ , - , / , *)")
let num2 = +prompt("Enter a second number")
if(opeartor === "+"){
    console.log(`Output ${num1} + ${num2} = ${num1 + num2}`);
}else if(opeartor === "-"){
    console.log(`Output ${num1} - ${num2} = ${num1 - num2}`);
}else if(opeartor === "/"){
    console.log(`Output ${num1} / ${num2} = ${num1 / num2}`);
}else if(opeartor === "*"){
    console.log(`Output ${num1} * ${num2} = ${num1 * num2}`);
}

// BMI Calculator
// Formula : BMI = weight (kg) / (height (m) * height (m))
let weight = +prompt("Enter a weight in kg")
let height = +prompt("Enter a height in meters")
let Calculate = weight / (height * height)
console.log(`Your BMI is ${Calculate}`);

// Age Calculator
let currentYear = 2025
let birthYear = 2004
let differnce = currentYear - birthYear
console.log(`Your age is ${differnce}`);

// Grading System (marks to grade using nested if)
let score = 50
if(score >= 90 && score <= 100){
    console.log("Grade A")
} else {
    if(score >= 80 && score < 90){
        console.log("Grade B")
    } else {
        console.log("Grade C or F")
    }
}

// Login Validator (user-name or password....)
let userName = "aliAhmed"
let password = 2468123
let userInput = prompt("Enter a correct user name")
let user_input = +prompt("Enter a correct password")
if(userName === userInput && password === user_input) {
    console.log("Login Successfully")
}else {
    console.log("Login Failed")
}

