// Mini Project
// Vowel Counter
let str = "coder"
let counter = 0
for(let val of str){
    console.log(val);
    if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
        counter++
    }
}
console.log(counter)

// Count Uppercase letters in a string
let string = "FaisallMosque"
let count = 0
for(let val of string){
    console.log(val)
    if(val.toUpperCase() === val){
        count++
    }
}
console.log(count)

// Vowels Print in a reverse mode
let text = "education"
for(let i = text.length-1; i >= 0; i--){
    if(text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u")
    console.log(text[i])
}

// Table Generator
let num = +prompt("Enter a number and get a table ")
for(let i = 1; i <= 12; i++){
    console.log(num * i)
}

// Nested Loop
for(let i = 2; i <= 4; i++){
    console.log(`Table of ${i}`);
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 1 se 100 tak loop chalao. Jaise hi pehla number mile jo 7 ka multiple ho, usay print karo aur loop stop kar do.
for(let i = 1; i <= 100; i++){
    if(i % 7 === 0){
        console.log(i)
        break;
    }
}

// 1 se 20 tak numbers print karo, lekin 5 ke multiples skip karo.
for(let i = 1; i <= 20; i++){
    if(i % 5 === 0){
        continue
    }
    console.log(i)
}

// Ek string lo, har character ko check karo. Jaise hi pehla vowel (a, e, i, o, u) mile, usko print karo aur loop stop kar do.
let str_text = "grapes"
for(let val of str_text){
    if(val === "a" || val === "e"){
        console.log(val)
        break
    }
}

// 1 se 30 tak loop chalao. Sirf odd numbers print karo. Jaise hi 17 aaye, loop ko stop kar do.
for(let i = 1; i <= 30; i++){
    if(i % 2 != 0 ){
        console.log(i)
    } if(i === 17){
        break
    }
}

// Bonus Challenge (⚡Intermediate):
// Ek number user se lo (prompt). 1 se us number tak print karo, lekin:
// Multiples of 3 skip karo (continue) Aur agar number 50 aajaye, to loop ko break karo
let user_number = +prompt("Enter a number...")
for(let i = 1; i <= user_number; i++) {
    if(i % 3 === 0){
        continue
    } if(i === 50){
        break
    }
    console.log(i)
}