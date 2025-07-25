// ---- Lets Practice

// Qs. You are creating a website for your college. Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) that allows user to view website data.

let data = "Student data..."
class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    viewData(){
        console.log(`Data : ${data}`)
    }
}

let student1 = new User("ali","abc@email.com")
let student2 = new User("ayesha","ayesha@email.com")

// Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
class Admin extends User {
    constructor(name,email){
        super(name,email)
    }
    editData(){
        data = "edit data by admin"
    }
}

let admin = new Admin("admin","admin@.com")