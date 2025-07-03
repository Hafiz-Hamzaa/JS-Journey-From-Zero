// Events in JS: The change in the state of an object is known as an Event
// Event Handling in JS: 
// let btn = document.querySelector(".btn2")
// btn.onclick = ()=>{
//     console.log("Button was clicked")
// }

// Event Object : It is a special object that has details about the event.
let bt = document.querySelector(".btn3")
bt.onclick = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.type)
    console.log("button was click")
}

// Most better way to handling event by addEventListner
// Event Listeners : add & remove
let btn = document.querySelector(".btn2")
btn.addEventListener("click", (e) => {
    console.log(e)
    console.log("Button Clicked")
})

// benefit of addeventlistner : ap same events per multiple kaam krwaskte hai
// Remove Listener:
let myBtn = document.querySelector(".my-btn")
myBtn.addEventListener("click", () => {
    console.log("Handler 1")
})
myBtn.addEventListener("click", () => {
    console.log("Handler 2")
})
const handlerThree = () => {
    console.log("Handler 3")
}
myBtn.addEventListener("click", handlerThree)
myBtn.addEventListener("click", () => {
    console.log("Handler 4")
})
myBtn.removeEventListener("click",handlerThree)