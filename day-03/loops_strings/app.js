// Loops and Strings
for(let i = 1; i <= 5; i++){
    console.log("i =", i)
}
// calculate sum 1 to 5
let sum = 0
for(let i = 1; i <= 5; i++) {
    sum = sum + i
}
console.log("sum =", sum)

// calculate sum 1 to n
let Sum = 0
let n = 100
for(let i = 1; i <= n; i++){
    Sum = Sum + i
}
console.log("sum =", Sum)

// while-loop
let i = 1
while(i <= 10){
    console.log("JavaScipt")
    i++;
}

// Infinite-loop(never ends so dont use infinite loop)
// do-while loop
let j = 1
do{
    console.log("atleast one time run")
    j++
} while(j >= 10);

// for-of loop (iterate on arrays and strings)
let str = "Programming"
let size = 0
for(let val of str) {
    console.log("val =", val)
    size++
}
console.log("size =", size)

// for-in-loop(iterate on objects keys and values)
let student = {
    name : "Ali",
    age : 23,
    isPass : true
}
for(let key in student){
    console.log("key =", key, "value =", student[key])
}

// Strings and Methods
// string lenght
let string = "Hello"
console.log(string.length)
// Index find at some position
console.log(string[2])

// Escape charcters
let word = "Bat\nBall"
let anotherWord = "Football\tplayer"
console.log(word)
console.log(anotherWord)

// String Methods....
// Important Methods
// uppercase , lowercase , trim , slice , concat , chartAt , replace
let myStr = "logic"
let newStr = myStr.toUpperCase() // lowercase same
console.log(myStr) // ==> strings are immutable no change in original string 
console.log(newStr)

let text = "world"
let result = text.slice(1,3) // slice
console.log(result)

// PQs : Prompt the user to enter their full name. Start username with @, followed by their full name and ending with the fullname length.
let name = prompt("Enter you full name")
let calculateLength = name.length
console.log(`@${name}${calculateLength}`)

// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let correctNumber = 25
let userGuess = +prompt("Guessing a number between (0-25)")
while(correctNumber != userGuess){
    userGuess = prompt("Guess wrong.. Try again")
}
console.log("Congratulations! Your Guess is correct...")

// Practice Qs1. Print all even numbers from 0 to 100.
for(let i = 0; i <= 100; i++){ 
    if(i % 2 === 0){
        console.log("even numbers =", i)
    }
}

// Nested Loops 
for(let i = 0; i <= 3; i++){
    console.log(`Outer loop ${i}`)
    for(let j = 1; j <= 5; j++){
        console.log(`Inner loop ${j}`)
    }
}

// break 
for(let i = 0; i <= 5; i++){
    if(i === 4){
        break
    }
    console.log(i)
}

// continue
for(let i = 0; i <= 5; i++){
    if(i === 3){
        continue
    }
    console.log(i)
}