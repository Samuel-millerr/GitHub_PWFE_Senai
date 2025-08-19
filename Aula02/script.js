const { createElement } = require("react");

let btn = document.querySelector("button");

function random(num){
    return Math.floor(Math.random() * (num+1));
};

// btn.onclick = function() {
//     let cor = 
//     "rgb(" +random(255) + "," +random(255) + ","+random(255) + ")";

//     document.body.style.backgroundColor = cor;
// };

// function randomBackground() {
//     let cor = 
//     "rgb(" +random(255) + "," +random(255) + ","+random(255) + ")";

//     document.body.style.backgroundColor = cor;
// };

// btn.addEventListener("click", randomBackground) 

// function bgChange(event){
//     let cor = 
//     "rgb(" +random(255) + "," +random(255) + ","+random(255) + ")";


//     event.target.style.backgroundColor = cor
// };

// btn.addEventListener("click", bgChange);
