// Functions and Array Advanced Methods....
// Traditional Function along with parameters , arguments and return keyword
function myFunc(a , b) {
    return a * b
}
let result = myFunc(20,90)
console.log(result)

// Arrow Functions 
const arrow = (msg) =>{
    return msg
}
let output = arrow("I love JS")
console.log(output)

// Foreach Loop in Array:
let arr = ["Pakistan","India","UAE","US"]
arr.forEach((val) => {
    console.log(val)
})

// Map Method
let fruits = ["apple","mango","orange","banana"]
let newArr = fruits.map((val) => {
    return val
})
console.log(newArr)

// Filter Methods
let num = [1 , 9 , 8 , 6 , 4]
let even = num.filter((val) => {
    return val % 2 === 0
})
console.log(even)

// Reduce Method
let sumArr = [20 , 70 , 30 , 50]
let sum = sumArr.reduce((pre,curr) => {
    return pre + curr
})
console.log(sum)

// PQs :For a given array of numbers, print the square of each value using the forEach loop.
let numbers = [2 , 4 , 6 , 8 , 10]
numbers.forEach((val) => {
    console.log(val * val)
})

// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marks = [80 , 92 , 45 , 97 , 94 , 23]
let score = marks.filter((val) => {
    return val > 90
})
console.log(score)

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.
let userNumber = +prompt("Enter a number")
let array = []
for(let i = 1; i <= userNumber; i++){
    array.push(i)
}
console.log(array)

// ---- sum of all numbers
let Sum = array.reduce((pre,curr) => {
    return pre + curr
})
console.log(Sum)

// --- Product of all numbers
let product = array.reduce((pre,curr) => {
    return pre * curr
})
console.log(product)

// PQs : Qs. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.
function countVowels(str){
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++
        }
    }
    return count
}
let counter = countVowels("grapes")
console.log(counter);

// same with arrow function
const Arrow = (str) => {
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++
        }
    }
    return count
}
console.log(Arrow("javascript"))