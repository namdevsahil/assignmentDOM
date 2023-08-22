// keydown and keyup event
// keydown
// the keydown event is fired when a key is relesed.
// keyup
// The keyup event is fired a key is relesed.

let container = document.getElementById("container");
let display = document.getElementById("display");

// adding a key down event listener to the document 
document.addEventListener("keydown", function (e){
    display.style.color = "red";
    display.innerText = e.key + " isDown ";
}) ;

// adding a keyup event listener to  the document
document.addEventListener("keyup",function(e){
    display.style.color = "green";
    display.innerText = e.key + " keyup ";
});