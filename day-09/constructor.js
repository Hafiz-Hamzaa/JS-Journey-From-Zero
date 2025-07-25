// -------- Constructor( ) method is : automatically invoked by new : initializes object

class toyotaCar{
    constructor(brand,mileage){
        console.log("creating an object")
        this.brand = brand
        this.mileage = mileage
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
}

let fortuner = new toyotaCar("fortuner",10)
console.log(fortuner);
let lexus = new toyotaCar("lexus",20)
console.log(lexus);

// Inheritance in JS : inheritance is passing down properties & methods from parent class to child class.
// *If Child & Parent have same method, child’s method will be used. [Method Overriding]

class Person{
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
}

class Engineer extends Person{
    work(){
        console.log("solved problems,build something....")
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patients....")
    }
}
let Irfan = new Engineer()
let Atif = new Doctor()

// Note: super Keyword
// The super keyword is used to call the constructor of its parent class to access the parent's
// properties and methods.