// canvas to use 
const canvas= document.getElementById('boarder');

//gets 2-d context
const context = canvas.getContext('2d');

// speed of game is by seconds
let speed = 7;

let tileCount = 20;
let tileSize = 18;
let headX = 16;
let headY = 16;

// speed of the snake
let xVelocity=0;
let yVelocity=0;



// game loop 
function drawGame(){
clearScreen();
changeSnakePosition();
drawSnake();
setTimeout(drawGame,1000/ speed);
}


function clearScreen(){
context.fillStyle = 'black';
context.fillRect(0,0,canvas.width,canvas.height);
}
// adds snake color and shape
function drawSnake(){
    context.fillStyle = "red" 
    context.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize )
}

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

//adds movement to snake when arrow keys are pushed
document.body.addEventListener('keydown',keyDown);

function keyDown(event){
 //snake goes up
if(event.keyCode == 38){
    yVelocity =-1;
    xVelocity =0;
}
//snake goes down
if(event.keyCode == 40){
    yVelocity =1;
    xVelocity =0;
}
//snake goes left
if(event.keyCode == 37){
    yVelocity = 0;
    xVelocity = -1;
}

if(event.keyCode == 39){
    yVelocity = 0;
    xVelocity = 1;
}
}



drawGame();