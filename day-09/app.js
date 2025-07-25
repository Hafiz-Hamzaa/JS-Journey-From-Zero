// // ------- Classes & Objects
// Prototypes in JS :JS objects have a special property called prototype.
// A javaScript object is an entity having state and behavior (properties and method). We can set prototype using _ _ proto _ _
// *If object & prototype have same method, object’s method will be used.

const student = {
    fullName:"Ali Ahmed",
    age:21,
    printMarks:function print(){
        console.log("This is my functions",this.fullName) // this mtlb yehi object
    }
}

const employee = {
    calTax(){
        console.log("Rate is 10%")
    }
}
const umerIrfan = {
    salary:40000
}
umerIrfan.__proto__ = employee // apne prototype bh create krskte hai 

// Classes in JS : Class is a program-code template for creating objects. Those objects will have some state (variables) & some behaviour (functions) inside it.

class toyotaCar{
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
    setBrand(brand){
        this.brand = brand
    }
}
let fortuner = new toyotaCar()
fortuner.start()
fortuner.setBrand("fortuner")
let lexus = new toyotaCar()
lexus.stop()
lexus.setBrand("lexus")