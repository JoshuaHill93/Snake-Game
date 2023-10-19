// canvas to use 
const canvas= document.getElementById('boarder');
//gets 2-d context
const context = canvas.getContext('2d');
// speed of game is by seconds
let speed = 7;

let titleCount = 20;
let tileSize = canvas.width/ titleCount -9;
let headX = 20;
let headY = 20;

// speed of the snake
let xvelocity=0;
let yvelocity=0;



// game loop updates screen 
function drawGame(){
clearScreen();
drawSnake();
setTimeout(drawGame,1000/ speed);
}


function clearScreen(){
context.fillStlyle = 'black';
context.fillRect(0,0,canvas.Width,canvas.height);
}
// adds snake color and shape
function drawSnake(){
    context.fillStyle = "red" 
    context.fillRect(headX* titleCount, headY* titleCount, tileSize, tileSize )
}


drawGame();