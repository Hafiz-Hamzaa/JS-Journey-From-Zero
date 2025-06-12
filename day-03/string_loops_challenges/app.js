// String and Loops Challenges
// Challenge 1 : Count vowels in a string
let str = "Programming"
let count = 0
for(let val of str){
    if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
        console.log(`vowels in a string ${val}`)
        count++
    }
}
console.log(count)

// Challenge 2 : Reverse a string manually
let fruit = "banana"
for(let i = fruit.length-1; i >= 0; i--){
    console.log(fruit[i])
}

// Challenge 3 : Find how many uppercase letters in a string
let vegetable = "TurNiP"
let counter = 0
for(let val of vegetable){
    if(val.toUpperCase() === val){
        counter++
    }
}
console.log(counter)

// Challenge 4 : Replace all vowels with *
let sentence = "javascript is awesome"
let result = sentence.replaceAll(/[aeiou]/g,"*") // use regular expression
console.log(result)

// Challenge 5 : Ek string me agar koi digits (0-9) hain to unko remove karo aur sirf alphabets aur special characters print karo.
let text = "lava0kite123pear789"
let output = text.replace(/[0-9]/g,"$")
console.log(output)

// Challenge 6 :  Ek string me jitne bhi spaces hain (" "), unko - se replace karo. Har ek space ko hyphen me convert karo.
let role = "front end development"
let outcome = role.replace(/[" "]/g,"-")
console.log(outcome)

// Challeneg 7 : "Count how many times a specific character appears" ka matlab:
let random_word = "classroom"
let Count = 0
for(let val of random_word){
    if(val === "s"){
        Count++
    }
}
console.log(`s appear ${Count} times`)

// Challenge 8 : Print only unique chracters in a string
let fruits = "apple"
let obj = {}
for(let char of fruits){
    if(obj[char]){
        obj[char]++
    }else{
        obj[char] = 1
    }
}
for(let char of fruits){
    if(obj[char] === 1){
        console.log(char)
    }
}

// Challeneg 9 : Ek string lo, aur sirf un characters ko print karo jo repeat ho rahe hain (more than once).
let tools = "chatat"
let freq = {}
for(let val of tools){
    if(freq[val]){
        freq[val]++
    }else{
        freq[val] = 1
    }
}
for(let val of tools){
    if(freq[val] > 1){
        console.log(val)
    }
}


// Challenge 10: Check if a string is a palindrome.
let example = "civic"
let reverse_str = ""
for(let i = example.length-1; i >= 0; i--){
    reverse_str += example[i]
}
if(example === reverse_str){
    console.log("Yes it is a palindrome")
}else{
    console.log("No it is a palindrome")
}
