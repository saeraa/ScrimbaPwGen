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
let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    // extra array of symbols
let symbols = ['!', '#', '¤', '%', '&', '/', '(', ')', '=', '?', '`', '@', '£', '$', '€', '{', '[', ']', '}', '~', ',', '.', '-', '§', '½', '¨', "'", ';', ':', '_']
let symbolsArray = []
symbolsArray.push(...chars, ...symbols)
    // console.log(chars)
    // console.log(symbols)
    // when generate passwords: 14 character password generated
let btn1 = document.getElementById("pw1")
btn1.value = ("...")
let btn2 = document.getElementById("pw2")
btn2.value = ("...")
let btn3 = document.getElementById("pw3")
btn3.value = ("...")
let btn4 = document.getElementById("pw4")
btn4.value = ("...")

let myVar1 = ""
let myVar2 = ""
let myVar3 = ""
let myVar4 = ""

let checkSymbols = false

function generate() {

    // randomize 14 numbers

    myVar1 = ""
    for (let i = 0; i < 14; i++) {
        let myVar = Math.floor(Math.random() * chars.length)
        myVar1 += chars[myVar]
    }
    btn1.value = myVar1

    myVar2 = ""
    for (let i = 0; i < 14; i++) {
        let myVar = Math.floor(Math.random() * chars.length)
        myVar2 += chars[myVar]
    }
    btn2.value = myVar2

    myVar3 = ""
    for (let i = 0; i < 14; i++) {
        let myVar = Math.floor(Math.random() * chars.length)
        myVar3 += chars[myVar]
    }
    btn3.value = myVar3

    myVar4 = ""
    for (let i = 0; i < 14; i++) {
        let myVar = Math.floor(Math.random() * chars.length)
        myVar4 += chars[myVar]
    }
    btn4.value = myVar4
}


// include symbols

function includeSymbols() {

    if (!checkSymbols) {
        chars = symbolsArray
    } else {
        chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    }

    let checkedOrNot = document.getElementById("checkbox");
    if (checkedOrNot.checked) {
        checkSymbols = true
    } else {
        checkSymbols = false
    }
}

// copy buttons

function pw1btn() {
    /* Get the text field */
    var copyText = document.getElementById("pw1");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

function pw2btn() {
    /* Get the text field */
    var copyText = document.getElementById("pw2");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

function pw3btn() {
    /* Get the text field */
    var copyText = document.getElementById("pw3");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

function pw4btn() {
    /* Get the text field */
    var copyText = document.getElementById("pw4");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}