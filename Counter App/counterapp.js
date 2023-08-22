// getting the html element
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayvalue = document.getElementById("displayvalue");

// for decrement button click
decrementBtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value > 0 ){
        displayvalue.innerText = value - 1 ;
    } 
    else {
        alert("Negative value not allowed");
    }
});

// for increment button click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if ( value >= 10){
        alert("10+ values are not allowed");
    }
    else{
        displayvalue.innerText = value + 1;
}
});

// for reset buttin click
resetBtn.addEventListener("click", () => {
    displayvalue.innerText = 0;
});