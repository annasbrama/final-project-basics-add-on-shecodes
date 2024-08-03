function changeTheme() {
    let body = document.querySelector("body")

    body.classList.toggle("dark")
}

let theme = document.querySelector(".theme-button")
theme.addEventListener("click", changeTheme)

function learnMore() {

    alert("Saka's favourite footballer is Thierry Henry.")
    alert("Bukayo is a name that means add to happiness or joy.")
    alert("Saka's nickname is 'StarBoy'.")
    alert("Before using the number #7, Saka used to be the #77.")

}

let btnLearn = document.querySelector(".button-container")
btnLearn.addEventListener("click", learnMore)