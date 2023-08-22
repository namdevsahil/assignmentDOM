// mouseover
// The mouseover event is fired at an element when a pointing device (such as a mouse trackpad)
// is used to nove the cursor onto the element or one of its  child elelments.

const boxElement = document.getElementById("box");

// add a mouseover event listener to the element
boxElement.addEventListener("mouseover", function(){
    alert("you enterd  in Restricted Area 🙅 (mouse over event is working properly)");
});