/*
    This script contains functions to draw 
    elements on a canvas, showing a scene in
    the country with day/night cycles.

    Author: Josh Archer
    Author: Sonia Singh
    File: country.js
    Date: 07/02/2026
*/

//the drawing context, canvas size, and day/night setting
let ctx;
let canvasWidth, canvasHeight;
let dayTime = true;

//this function runs on page load (DO NOT EDIT!)
window.onload = function() {
    //select the canvas
    const canvas = document.getElementById('myCanvas');

    //get the context and canvas size to draw with
    ctx = canvas.getContext('2d');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    //draws the scene (this is handled by each student...)
    drawScene();

    //this flips the day/night cycle
    const button = document.querySelector('#switch');
    button.onclick = function() {
        dayTime = !dayTime;
        drawScene();
    }
}

/*
    Draws a house from a rectangle and 
    polygon in the countryside depicted.
*/
function drawHouse() {
    //Draw house...
    ctx.fillStyle = dayTime ? "#ADA98C": "#948768"
    ctx.fillRect(100, 440, 120, 100);

    //Draw roof...
    ctx.fillStyle = dayTime ? "#440E04": "#210702";
    ctx.beginPath();
    ctx.moveTo(80, 440);
    ctx.lineTo(160, 320);
    ctx.lineTo(240, 440);
    ctx.closePath();
    ctx.fill();

    //Draw door...
    ctx.fillStyle =  dayTime ? "#440E04": "#210702";
    ctx.fillRect(145, 480, 50, 60);

}

/*
    Draws a pond from three ellipses
    in the countryside depicted.
*/
function drawPond() {
    // Blue during day dark blue at night
    ctx.fillStyle = dayTime ? "#60E0AF" : "#285D7B";

    // Three elipses
    ctx.beginPath();
    ctx.ellipse(500,470,80,50,0,0,  Math.PI *2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(600,450,80,40,0,0,Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(600,500,60,40,0,0,  Math.PI*2);
    ctx.fill();
    
}

/*
    Draws the ground, sky, and moon/sun
    depending on the day/night cycle.
*/

function drawBackground() {
    // sky
    ctx.fillStyle = dayTime ? "#52D0DE" : "midnightblue";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    // ground
    ctx.fillStyle = dayTime ? "#27AA2F" : "#337153";
    ctx.fillRect(0, 300, canvasWidth, canvasHeight);

    // Sun and moon
    ctx.fillStyle = dayTime ? "#FFF75C" : "white";
    ctx.beginPath();
    //position them
    ctx.arc(25, 25, 130, 0, Math.PI * 2); 
    ctx.fill();

}

// Extra
// draw birds during the day in the sky
function drawStars() {
    if (dayTime) {
        ctx.fillStyle = "black";

        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvasWidth;
            let y = Math.random() * 300;

            ctx.beginPath();
            ctx.arc(x,y, 4, 0, Math.PI * 2);
            ctx.arc(x-3,y-3, 3, 0, Math.PI * 2);
            ctx.arc(x-7,y-5, 2.5, 0, Math.PI * 2);
            ctx.arc(x-9,y-7, 2, 0, Math.PI * 2);
            ctx.arc(x-10,y-8, 2, 0, Math.PI * 2);
            ctx.arc(x+3,y-3, 3, 0, Math.PI * 2);
            ctx.arc(x+7,y-5, 2.5, 0, Math.PI * 2);
            ctx.arc(x+9,y-7, 2, 0, Math.PI * 2);
            ctx.arc(x+10,y-8, 2, 0, Math.PI * 2);
            ctx.fill();
        }
 /*
    Draws random stars (circles) in the sky
    when the night cycle is toggled.
*/

    } else if (!dayTime) {
        ctx.fillStyle = "white";

        for (let i = 0; i < 20; i++) {
            let x = Math.random() * canvasWidth;
            let y = Math.random() * 300;
            // make stars different sizes
            let size = Math.random() * 2 +1; 

            ctx.beginPath();
            ctx.arc(x,y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
/*
    Draws a line of trees on the horizon
    using a loop and the drawTree() function.
*/
function drawTreeLine() {
    for (let x = 5; x < canvasWidth; x += 70) {
        drawTree(x, 270 );

    }
}
/*
    Draws a single tree at the position
    provided.
*/
function drawTree(x, y) {

    //Draw trunk...
    ctx.fillStyle = dayTime ? "#7A5807" : "#654321";
    ctx.fillRect(x, y, 20, 60);

    //Draw three leaves using drawLeaf()...
    drawLeaf(x - 10, y );
    drawLeaf(x +10, y - 15);
    drawLeaf(x + 25, y );

}

/*
    Draws three broad leaves (circles) at the top
    of a tree at the position provided.
*/
function drawLeaf(x, y) {
    ctx.fillStyle = dayTime ? "green" : "#245130";
    ctx.beginPath();
    ctx.arc(x,y,20,0, Math.PI * 2);
    ctx.fill();
}

/*
    Begins all drawing of element on the canvas.
    drawScene() should call the functions above.
*/
function drawScene(){
    ctx.clearRect(0,0, canvasWidth, canvasHeight);

    //Order of drawing
    drawBackground();
    drawStars();
    drawTreeLine();
    drawHouse();
    drawPond();
}

console.log("Hello")