// Mini Project
// 💡 Project Idea: Student Marks Manager
// 📚 Use Case: Ek choti si app banani hai jisme:
// Students ke naam aur marks add kar sakte ho
// Total students list print kar sakte ho
// Kis student ko remove karna hai wo kar sakte ho
// Average marks calculate kar sakte ho

// ---- Data of Student
let student = [
    ["ali" , 90],
    ["umer" , 95]
]
// ---- Add more Student
student.push(["hassan" , 98],["bilal" , 92])
console.log(student)

// ---- Total Student List Print
for(let  i = 0; i < student.length; i++){
    console.log(`${student[i][0]} - ${student[i][1]}`)
}

// ---- Remove Student from the list
student.splice(3,1)
console.log(student)

// ---- Find avg of the student marks
let sum = 0
for(let i = 0; i < student.length; i++){
    sum += student[i][1]
}
let avg = sum / student.length
console.log(avg)


// 📦 Mini Project Idea: Grocery List Tracker
// 🛒 Use Case: Tumhare paas ek array hoga jo grocery items store karega.
// Naye items add karoge
// Kisi item ko remove karoge
// List ko display karoge
// Total kitne items hain, wo count karoge

// ---- list of grocery items
let grocery = ["bread" , "sugar" , "salt" , "baking powder"]

// ---- add new items in a grocery array
grocery.push("noodles" , "milk")
console.log(grocery)

// remove any items in a grocery array like sugar
grocery.splice(1,1)
console.log(grocery)

// ---- List display of grocery items
for(let i = 0; i < grocery.length; i++){
    console.log(`- ${grocery[i]}`)
}

// ---- Total number of grocery items
console.log(grocery.length)