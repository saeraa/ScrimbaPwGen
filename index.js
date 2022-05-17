// Scrimba.com SOLO PROJECT: PASSWORD GENERATOR
// Requirements:
// Array to hold all possible chars, upper and lowercase, numbers, symbols
// Button to generate 4 random password options
// Display password options
// Stretch goal: Ability to set password length
// Stretch goal: 1-click copy password to the clipboard (hint: use <input type="text"> to display the password options)

// Figma
// https://www.figma.com/file/YRO9Iw5IYaOorjnRyNz4bV/Random-Password-Generator?node-id=0%3A1

// array with all upper and lowercase plus numbers
let chars = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "t", "u", "v", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "W",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]

// extra array of symbols
const symbols = [
    "!", "#", "¤", "%", "&", "/", "(", ")", "=", "?", "`", "@", "£", "$", "€", "{",
    "[", "]", "}", "~", ",", ".", "-", "§", "½", "¨", "'", ";", ":", "_",]

// array with everything
const symbolsArray = []
symbolsArray.push(...chars, ...symbols)

let checkSymbols = false
let passwordLength = 12

// event listeners for button, symbols checker and length option
document.getElementById("generate-btn").addEventListener("click", generatePasswords)
document.getElementById("checkbox-el").addEventListener("click", includeSymbols)
document.getElementById("length-el").addEventListener("change", function funct() { passwordLength = this.value })

// creating array with the input fields where passwords will be generated
const outputArray = Array.from(document.getElementsByClassName("pass-input-el"))

// adding copy buttons to each password field
outputArray.forEach((inputField, fieldNum) => {
    inputField.insertAdjacentHTML("afterend",
        `<button onclick="copyText(${fieldNum})"><img src="copy.png"></button>`)
})

// function for copying the passwords
function copyText(fieldNum) {
    navigator.clipboard.writeText(outputArray[fieldNum].value).then(function () {
        // display "text copied" popup
        textPopup()
    }, function () {
        // display "text copied" popup
        textPopup()

        // if clipboard copy doesn't work ::
        // navigator.clipboard is not supported in Scrimba browser, so used this workaround as provided by Bence in the Scrimba Discord 💜
        const dummyArea = document.createElement("textarea") // we create a dummy textarea
        document.body.appendChild(dummyArea) // add it to the dom
        dummyArea.value = field.innerText // set its text 
        dummyArea.select() // select everything in the textarea
        document.execCommand("copy") // copy it to the clipboard
        document.body.removeChild(dummyArea) // little clean up by removing it
    })

}

// text popup when text is copied
function textPopup() {
    document.getElementById("copied").style.display = "block"
    setTimeout(() => {
        document.getElementById("copied").style.display = "none"
    }, 800)
}

// make the magic happen
function generatePasswords() {
    outputArray.forEach((inputField) => {
        let password = ""
        for (let i = 0; i < passwordLength; i++) {
            password += chars[Math.floor(Math.random() * chars.length)]
        }
        inputField.value = password
    })
}

// include symbols in the password generated
function includeSymbols() {
    if (!checkSymbols) {
        chars = symbolsArray
    } else {
        chars = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
            "q", "r", "t", "u", "v", "x", "y", "z", "A", "B", "C", "D", "E", "F",
            "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
            "V", "X", "W", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
    }
    checkSymbols = document.getElementById("checkbox-el").checked ? true : false
}
