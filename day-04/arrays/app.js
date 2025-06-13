// Arrays...
let fruits = ["apple","mango","banana","pear"]
console.log(fruits);
console.log(fruits[2]); // index
fruits[3] = "orange" // update array
console.log(fruits);

// Looping over an Array
let arr = ["ali","hamza","hassan","umer"]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
} // using for loop
let num = [12,90,78,56]
for(let el of num){
    console.log(el)
} // using for of loop

// Array Methods : push , pop , shift , unshift , slice , splice , concat , tostring 
let vehicles = ["car","bike","bus"]
vehicles.push("train") // push
console.log(vehicles)
vehicles.shift() // shift
console.log(vehicles)

// slice
let vegetables = ["carrot","onion","tomato","turnip","ladyfinger"]
console.log(vegetables.slice(2,4))

// splice
let numbers = [1,2,3,4,5,6,7,8]
numbers.splice(2,2,100,101)
console.log(numbers); // delete and add
numbers.splice(3,1,90)
console.log(numbers) // delete and replace

// PQs : Qs. Create an array to store companies -> “Bloomberg”,"Microsft","Uber","Google","IBM","Netflix"
// a- remove the first company from the array , b- remove uber and add ola in its place , c- add amazon at the end
let companies = ["Bloomberg","Microsft","Uber","Google","IBM","Netflix"]
console.log(companies);
companies.shift()
console.log(companies);
companies.splice(1,1,"Ola")
console.log(companies);
companies.push("Amazon")
console.log(companies);

// PQs : Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] and find the average marks of the entire class
let marks = [85,97,44,37,76,60]
let sum = 0
    for(let i = 0; i < marks.length; i++){
        sum += marks[i]
    }
let avg = sum / marks.length
console.log(avg);

// PQs :For a given array with 5 price of items -> [250,645,300,900,50]
//  All items have an offer of 10% OFF on them. Change the array to store final price after applying offer
let price = [250,645,300,900,50]
for(let i = 0; i < price.length; i++){
    let offer = price[i] - (price[i] * 0.10)
    console.log(`After applying offer ${offer}`);
}