// Logic Challenges
// Count Even Numbers
let arr = [2, 5, 8, 11, 14, 17,20];
let count = 0
for(let val of arr){
    if(val % 2 === 0){
        count++
    }
}
console.log(count)

// Print Items with Index
let fruits = ["apple", "banana", "mango"];
let idx = 0
for(let i = 0; i < fruits.length; i++){
    console.log(`Index ${idx} : ${fruits[i]}`)
    idx++
}

// Reverse print
let animals = ["cat", "dog", "elephant"];
for(let i = animals.length-1 ; i >= 0; i--){
    console.log(animals[i])
}

//  Count How Many Are Greater Than 10
let num = [12,9,8,30,20,100]
let counter = 0
for(let val of num){
    if(val > 10){
        counter++
    }
}
console.log(counter);

// Print only first chracters
let countries = ["Pakistan", "India", "China"];
for(let i = 0; i < countries.length; i++){
    let firstLetter = (countries[i].charAt(0))
        console.log(firstLetter);
}

//  Multiply Each by 2 (without .map)
let numb = [2 , 6 , 8]
for(let val of numb){
    let Multiply = val * 2
    console.log(Multiply);
}

// Remove Negative Numbers
let data = [12 , -20 , 60 , -100 , 90 , -120]
let positive = []
for(let val of data){
    if(val > 0){
        positive.push(val)
    }
}
console.log(positive)

// Check if all elements in an array are palindrome or not — is super useful for logic building.
let words = ["madam", "racecar", "level"];
let allPalindrome = true
for(let i = words.length-1; i >= 0; i--){
    let word = words[i]
    let reverse = word.split('').reverse().join('')
    if(word != reverse){
        allPalindrome = false
        break;
    }
}
if(allPalindrome){
    console.log("It is palindrome")
}else{
    console.log("It is not palindrome")
}
