// Mini-Project : Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let btn = document.querySelector(".toggle-btn")
let flag = 0
btn.addEventListener("click", () => {
    if(flag == 0){
        btn.innerText = 'Toggle White Mode'
        document.body.style.backgroundColor = "black"
        flag = 1
    } else {
        btn.innerText = 'Toggle Dark Mode'
        document.body.style.backgroundColor = "white"
        flag = 0
    }
})