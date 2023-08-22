// keypress
// the keypress event is fired when a key thet produces a character valueis pressed down.
let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')

// adding keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(e){
    display.innerText ="you have Pressed " + e.key
})