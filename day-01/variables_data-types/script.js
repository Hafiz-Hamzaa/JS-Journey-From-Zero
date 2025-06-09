// What is Prgramming Language....
// VS Code Set Up...
// Javascript is Dynamically Typed Language...
// Connnect JS with Browser...
// String Concatenation..

// Our First Code in JS....
console.log("I am learning JS...");
// Variables..
name = "Tonny Stark"
age = 25
isFollow = true
console.log(isFollow);
console.log(typeof age);
// Variable Rules... and Cases

// Data Types (Primitive VS Non-Primitive)
// 7 Primitive Data Types
// let , const , var (Differences)
let userName = "Ali Jawad" // string
let Age = 30 // number
const PI = 3.124 // number
var isMarried = false // boolean
let empty = null // null
let dontKnow = undefined // undefined
let bigNumber = BigInt(1234567n) // bigint(rare-case use)
let text = Symbol("This is data type in JS...") // symbol(rare-case use)
console.log(PI);

// Non-Primitive Data Types 
// Objects (Sub-Category - Arrays and Functions)
// Objects (Collection of items in key : value pairs...)
const Student = {
    name : "Hamza",
    age : 12,
    isMarried : false,
}
console.log(Student);
// Key access by using Dot and Square Bracket Notation..
console.log(Student.age);
console.log(Student.isMarried)
// Upadted key 
Student.name = "Umer"
console.log(Student["name"]);

// Practice Question...
// Qs : Create a const object called “profile” to store information shown in the picture.
const Profile = {
    name : "Hamza",
    followers : 2500,
    following : 10,
    isFollow : true,
}
console.log(Profile);
console.log(typeof Profile);
console.log(typeof Profile.isFollow);