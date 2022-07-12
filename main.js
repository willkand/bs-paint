/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

//color choices
let paletteColors = document.querySelectorAll(".palette .palette-color");

// paint brush
let paintBrush = document.querySelector(" .current-brush");

let canvasArea = document.querySelectorAll(".canvas div")

let app = document.querySelector(".app")


/*event listner to change bursh color based on color slection */
for (let i = 0; i < paletteColors.length; i++){
    paletteColors[i].addEventListener('click', function(){
      console.log(paletteColors[i]);
      paintBrush.classList.replace(paintBrush.classList[1], paletteColors[i].classList[1]);
    })
}

    paintBrush.addEventListener('click', function(){
      console.log(paintBrush);
    })

/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

//chnage canvas paint area by square


//   square.addEventListener('click', function(){
//     square.classList.replace(square.classList[1], paintBrush.classList[1]);
//   })
// }

for (let square of canvasArea){
square.addEventListener('mouseover', function(){

  if (mouseDown === true){
    square.classList.replace(square.classList[1], paintBrush.classList[1]);
  }
})
}



//mouse down = occurs when the user presses a mouse button over an element

app.addEventListener('mousedown',function(){
  mouseDown = true;
});

//mouse up = occurs when a user releasses a mouse button over an element


app.addEventListener('mouseup',function(){
  mouseDown = false;
});


//dark mode code


let darkModeButton = document.querySelector(".dark-mode-button");

let body = document.querySelector("body");

let darkMode = darkModeButton.addEventListener('click', function (){
  body.classList.toggle("dark-mode")
})













/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
