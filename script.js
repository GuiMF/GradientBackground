var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var backgroundColor = document.querySelector(".background-current-color");



// Creats functions
function setcolor(color1, color2){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
}

function displayColor(color1, color2){
    backgroundColor.innerHTML = "Color1: " + color1.value + " Color2: " + color2.value;
};

displayColor(color1, color2)


// Listens for input and changes background accordingly
color1.addEventListener("input", function(){
    setcolor(color1, color2);
    displayColor(color1, color2);
});


color2.addEventListener("input", function(){
    setcolor(color1, color2);
    displayColor(color1, color2);
});