// Logic-Challenges
// Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = 86
if(score >= 90 && score <= 100 ){
    console.log("Grade A")
}else if(score >= 70 && score <= 89 ){
    console.log("Grade B")
}else if(score >= 60 && score <= 69 ){
    console.log("Grade C")
}else if(score >= 50 && score <= 59 ){
    console.log("Grade D")
}else{
    console.log("Failed")
}

//  Check if a number is even or odd using %
let number = 21
if(number % 2 == 0){
    console.log(`${number} is even`)
}else{
    console.log(`${number} is odd`)
}

// Calculate square and cube of a number using **
let userInput = +prompt("Enter a number(1-100)")
let userNumber = +prompt("Enter a number(1-100")
let square = userInput ** 2
let cube = userNumber ** 3
console.log(`${userInput} is a sqaure of ${square}`);
console.log(`${userNumber} is a cube of ${cube}`);

// Compare two numbers and print the greater one
let num1 = 90
let num2 = 80
if(num1 > num2){
    console.log(`${num1} is greater then ${num2}`)
}else if(num2 > num1){
    console.log(`${num2} is greater then ${num1}`)
}

//  Use += to add values to a counter variable
let counter = 10
counter += 20
console.log(counter);

// Check eligibility based on age using &&
let aged = 15
if(aged < 18 && aged == 15 ) {
    console.log("You can admission")
}

//  Ternary to check pass/fail
let remarks = 60
let output = (remarks >= 50 )?"Passed":"Failed"
console.log(output)

// Positive / Negative / Zero Check Number
let no = +prompt("Enter a random numbrer")
if(no === 0){
    console.log("number is zero")
}else{
    if(no > 0){
        console.log("number is positive")
    }else{
        console.log("number is negative")
    }
}

// NESTED IF STRUCTURE PROBLEMS
// Check Even or Odd and Positive
let numeric = 22
if(numeric > 0){
    console.log("Number is Positive")
    if(numeric % 2 == 0) {
        console.log("Number is Even")
    }else {
        console.log("Number is Odd")
    }
}else{
    console.log("Number is not Positive")
}

// Student eligibility
let student_age = 21
let marks = 65
if(student_age >= 18){
    if(marks >= 60){
        console.log("Eligibile")
    }else{
        console.log("Not enough marks")
    }
}else{
    console.log("Your age is not match")
}

// ATM Verification
let card = "inserted"
let pin = "correct"
if(card === "inserted"){
    if(pin === "correct"){
        console.log("Transaction allowed")
    }else{
        console.log("Incorrect Pin")
    }
}else{
    console.log("First Card Inserted...")
}

// Max of Three Numbers
let number_1 = 1000
let number_2 = 500
let number_3 = 850
if(number_1 > number_2 && number_1 > number_3){
    console.log(`${number_1} is the greates number`)
}else if(number_2 > number_1 && number_2 > number_3) {
    console.log(`${number_2} is the greatet`)
}else{
    console.log(`${number_3} is the greatest number`)
}
// OR using method also (Math.max)
// let compare = Math.max(number_1,number_2,number_3)
// console.log(compare)