// mouse out 
// the mouse event is fired at an element when a pointiing device(usually a mouse)
// is used to move the cursor so that it is no longer contained within the element or one of its children.

const boxElement = document.getElementById("box");
// add event listener to the elememt
boxElement.addEventListener("mouseout", function(){
    alert("you left the safe zone 🙅(Mouse out event working properly)");
});