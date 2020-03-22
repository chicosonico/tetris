var canvas;
var ctx;
var FPS = 50;

var widthCanvas = 400;
var heightCanvas = 640;


var widthGameTable = 10;
var heightGameTable = 10;

var widthPiece = 40;
var heightPiece = 40;





// (12 x 17)-(10 x 16)
var gameTable = [
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];



function myFunction(){
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

canvas.style.width = widthCanvas;
canvas.style.height = heightCanvas;
}

setInterval(function(){
 mainFunction();
}, 1000/FPS);

function cleanCanvas(){
canvas.width = widthCanvas;
canvas.height = heightCanvas;
};


function mainFunction(){
    cleanCanvas();
// console.log('bucle');

};