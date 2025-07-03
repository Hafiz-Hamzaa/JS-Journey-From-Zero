// ---- Logic Challenges

// ------ Qs. Create a H2 heading element with text - “Hello JavaScript” . Append “from Apna College students” to this text using JS.
let text = document.querySelector("h2")
text.innerText = text.innerText + " "+ "from Apna College"
console.log(text);

// --- Qs. Create 3 divs with common class name - “box” . Access them & add some unique text to each of them.
let boxes = document.querySelectorAll(".myClass")
boxes[0].innerText = 'one'
boxes[1].innerText = 'two'
boxes[2].innerText = 'three'
console.log(boxes);

// Qs. Write a program to click on a button to change the text
function btn(){
  let h2 = document.querySelector("h2")
  h2.innerText = "DOM is Powerful"
}

// Qs. Write a program to change HTML Content on a clck button
function changeText(){
  document.querySelector("p").innerText = "Hello JS"
}
function changeHTML(){
  document.querySelector("p").innerHTML = `<h1>Hello JS</h1>`
}

// Qs. Create a new button element. Give it a text “click me” , background color of red & text color of white. 
// Insert the button as the first element inside the body tag.
let button = document.createElement("button")
button.innerText = "click me"
button.style.backgroundColor = 'red'
button.style.color = 'white'
let body = document.querySelector("body")
body.prepend(button)

// Qs. Qs. Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element.
// Solve this problem using classList. Did you notice, how you overwrite the class name when you add a new one?
let para = document.querySelector(".oldClass")
para.classList.add("newClass")