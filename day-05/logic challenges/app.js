// Logic Challenges.....
// . Ek function banao square jo kisi number ka square return kare
function square(num){
    return num * num
}
console.log(square(25))

//  Ek function banao isEven jo check kare number even hai ya nahi
const isEven = (num) => {
    return num % 2 === 0 
}
console.log(isEven(22))

// Calculate Age
const ageCalculator = (birthYear) => {
    let currentYear = 2025
    let diff = currentYear - birthYear
    return diff
}
console.log(ageCalculator(2002))

// Find Greater Number
const findGreater = (a , b) => {
    if(a > b){
        return a 
    }else if(b > a){
        return b
    }else{
        return "Both are equal"
    }
}
console.log(findGreater(120 , 120))

// Count vowels in a string
const countVowels = (str) => {
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++
        }
    }
    return count
}
console.log(countVowels("hello"))

// Reverse String...
function reverseString(str){
    let reverse = ""
for(let i = str.length-1; i >= 0; i--){
    reverse += str[i]
}
    return reverse
}
console.log(reverseString("hello"))

// Funtcion + Array Challenge
// Sum of All elements
const Sum = (arr) => {
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}
console.log(Sum([12,10,20,8]))

// Count Even Numbers
const countEven = (arr) => {
    let count = 0
    for(let val of arr){
        if(val % 2 === 0){
            count++
        }
    }
    return count
}
console.log(countEven([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]))

// findMax with method 
const findMax = (arr) => {
    let max = arr.reduce((pre,curr) => {
        return pre > curr ? pre : curr
    })
    return max
}
console.log(findMax([12 , 20 , 90 , 100 , 200]))

// findmax without using a method
function maxFind(arr){
let max = arr[0]
for(let val of arr){
    if(val > max){
        max = val
    }
}
return max
}
console.log(maxFind([20,40,80,120,60]));