
// Logic -Programs
// sum two numbers and get average:
let num1 = 50
let num2 = 30
let sum = num1 + num2
let avg = sum / 2
console.log(avg);

// Convert Temperature (Celsius to Fahrenheit)
// Fahrenheit=(Celsius× 9/5) + 32
let userInput = +prompt("Enter a number")
let converter = (userInput * 9 / 5) + 32
console.log(converter);

// Convert Kilometers to Miles
// Formula (Hint Only):Miles=Kilometers×0.621371
let user_input = +prompt("Enter a number in kilometers")
let Miles = user_input * 0.621371
console.log(Miles);

// Simple Interest Calculator
// Formula (Hint Only): Simple Interest = (P * R * T) / 100
let principle = +prompt("Enter a Principle Amount")
let rate = +prompt("Enter a rate amount")
let time = +prompt("Enter a time")
let calculate = (principle * rate * time ) / 100
console.log(calculate);

// Swap Two numbers
let a = 10
let b = 20
let c = a
a = b
b = c
console.log("a =", a);
console.log("b =", b);

// Convert Hours into Seconds
let Hours = +prompt("Enter a number in Hours...")
let convertSec = Hours * 3600
console.log(convertSec);

//  Add Two Decimals
let num_1 = 3.14
let num_2 = 2.71
let sum_up = num_1 + num_2
console.log(sum_up);