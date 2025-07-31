// Closure tab banta hai jab ek inner function outer function ke variables ko yaad rakhta hai
function counter(){
    let count = 0
    return function inner(){
        count++
        return count
    }
}
let count = counter()
console.log(count())
console.log(count())
console.log(count())
console.log(count())

// Currying means ek function jo multiple arguments accept karta tha, usay tod kar multiple functions banayein, jahan har function ek argument accept kare.
// ------ Normal Function
function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(1, 2, 3)); // 6

// ------ Curried Version
function curriedSum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(curriedSum(10)(20)(30))

// Practice Problem related curried
function evaluate(opt){
    return function(a){
        return function(b){
            return `${opt}:${a+b}`
        }
    }
}
console.log(evaluate("sum")(10)(5))  

// Destructuring of Arrays & Objects
let colors = ["orange","red","blue","green"]
let [first,second] = colors

let obj = {
    name:"ali",
    age:21,
    isMarried:true
}
let {name,age} = obj