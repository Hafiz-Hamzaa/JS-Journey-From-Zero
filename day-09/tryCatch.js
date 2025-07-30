// What is Error Handling? JavaScript sometimes throws errors when code breaks during execution. Without handling, the script stops. try-catch-finally lets us catch and deal with errors gracefully.

// -- try catch se kia huwa ab hamara agai ka code bh chla ruka nh error ki waja se 

// ------ Bsic Syntax
/* try {
    Code that may throw error
} catch (error) {
    Handle the error
} finally {
    Optional. Runs always, error or not
 } */

// --- Basic Example 
let a = 12
let b = 10
console.log(a)
console.log(b)
console.log(a+b)
console.log(a-b)
try{
    console.log(a*c)
}catch(err){
    console.log("Error Occured :", err.message);
}
console.log("hello,how are you")
console.log("i am learning js...")

// ---- Another Example : Handle an undefined function:
try{
    undefinedFunction()
}catch(err){
    console.log("Caught an eror" , err.message)
} finally {
    console.log("End of script");
}

// ----  Handle division by zero safely
function safeDivide(a,b){
    try{
        if(b === 0) throw new Error("cannot divide by zero")
            console.log(`Result : ${a/b}`)
    } catch(err){
        console.log("Caught an error : " , err.message)
    }finally{
        console.log("Execution Finished")
    }
}
safeDivide(10,2) // successfully run
safeDivide(10,0) // error

// ----- Handle JSON parsing error
function parseData(jsonStr) {
  try {
    let data = JSON.parse(jsonStr);
    console.log("Name is:", data.name);
  } catch (err) {
    console.log("Invalid JSON:", err.message);
  }
}

parseData('{"name":"Ali"}'); // valid json
parseData('{"name":Ali}'); // invalid json

// ---- Optional catch binding
try {
    doSomething();
} catch {
  console.log("Error caught"); // No need to name the error if not using it
}
