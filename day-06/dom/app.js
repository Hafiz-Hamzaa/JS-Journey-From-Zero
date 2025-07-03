// ----- DOM (Document Object Model):
// window object : ye global hota hai iskai ander bohat sari proerties and methods hote hai or ye browser automatically create krta hai
// window.alert("Hello");
// ---- DOM : It is used for Dynamic changes in a webpage

// ------ DOM Manipulation :
// ----- Selecting with id -- return id 
let id = document.getElementById("para")
console.log(id)
console.dir(id)
// ---- Selecting with Class -- return HTML Collection
let myclass = document.getElementsByClassName("myClass")
console.log(myclass)
console.dir(myclass)
// ---- Selecting with tags ---  return also HTML Collection
let btn = document.getElementsByTagName("button")
console.log(btn);
// ---- Query Selector ---- return first element
let firstEl = document.querySelector("p")
console.log(firstEl)
console.dir(firstEl)
// ---- Query Seectorall --- return Nodelist
let allEl = document.querySelectorAll("p")
console.log(allEl)

// ---- DOM Properties : to access and modify 
// ---- tagName : returns tag for element nodes
let b = document.querySelector("button")
// console.log(b.tagName);
// ---- innerText : returns the text content of the element and all its children
let hd = document.querySelector('h1')
// hd.innerText = "new heading"
console.log(hd)
// --- innerHTML : returns the plain text or HTML contents in the element
// hd.innerHTML = `<i>hew heading</>`
console.log(hd)
// --- textContent : returns textual content even for hidden elements
let small = document.querySelector("h3")

// ---- DOM Attributes : 
// getAttribute( attr ) : to get the attribute value , setAttribute( attr, value ) : to set the attribute value
let  hd4 = document.querySelector("h4")
console.log(hd4.getAttribute("class"))
console.log(hd4.setAttribute("class","unique-heading"))
// ---- node.style
hd4.style.fontSize = "30px"
console.log(hd4);

// ----- Insert Elements & Remove Elements
let bt = document.createElement("button")
bt.innerText = "click"

let div = document.querySelector("div")
div.append(bt)  //adds at the end of node (inside)
div.prepend(bt) //adds at the start of node (inside)
div.before(bt)  //adds at the before of node (inside)
div.after(bt)  //adds at the after of node (inside)

let h1 = document.createElement("h1")
h1.innerText = "Top Heading"

let body = document.querySelector("body")
body.prepend(h1);
h1.remove()