let bulb = document.querySelector(".box")
let btn = document.querySelector("button")
let flag = 0
btn.addEventListener("click", function (){
    if(flag === 0){
        bulb.style.backgroundColor = 'yellow'
        btn.innerText = "OFF"
        flag = 1
    } else {
        bulb.style.backgroundColor = 'transparent'
        btn.innerText = "ON"
        flag = 0
    }
})