// Logic Challeges
// Print Even Numbers from 50 to 30 (Reverse Order)
for(let i = 50; i>= 30; i--){
    if(i % 2 === 0){
        console.log("i =", i)
    }
}

// Reverse Counting.. 10 to 1
let i = 10
while(i >= 1){
    console.log("i =", i)
    i--
}
// print even numbers using while -loop
let j = 0
while(j <= 30){
    if(j % 2 === 0){
        console.log("j =", j)
    }
    j++
}

// Object me agar koi property ki value string type hai to usko uppercase me convert kar ke print karo.
let data = {
        title: "book",
        pages: 150, 
        author: "John"
    };
for(let keys in data){
    console.log(keys, data[keys])
    if(typeof data[keys] === 'string'){
        console.log(data[keys].toUpperCase())
    }
}

// Object ke andar jo properties number type ki hain, unko 2 se multiply karke print karo.
let info = {
    name : "ali",
    role : "engineer",
    age : 25,
    cgpa : 4.5
}
for(let key in info){
    console.log(key , info[key])
    if(typeof info[key] === 'string'){
        console.log(info[key].length)
    }
}


// Ek string me jitne alphabets hain, unko lowercase me convert kar ke print karo (already lowercase ka kya hoga usko ignore kar sakte ho).
let word = "PEANUT BUTTER"
for(let val of word){
    console.log(val.toLowerCase())
}

// Ek string ke har character ko reverse order me print karo (ye ek logic challenge hai, array ke bina bhi kar sakte ho).
let str = "pool"
for(let i = str.length-1; i >= 0; i--){
    console.log(str[i])
}

// Ek string lo (e.g., "javascript"). Usme se middle 4 characters slice kar ke print karo.
let language = "javascript"
let output = language.slice(2,8)
console.log(output)
console.log(output.length)

// Ek string lo jisme start ya end me spaces hon (e.g., " hello world "). Pehle length print karo, phir trim karo aur dobara length print karo.
let text = "   hello world   "
console.log(text.length)
console.log(text.trim())
console.log(text.length)

// Ek string lo (e.g., "Pakistan"). User se ek number lo (prompt se), aur us index par jo character hai, use print karo.
let country = "Pakista"
let user = +prompt("Enter a number(0-7)")
console.log(country[user])