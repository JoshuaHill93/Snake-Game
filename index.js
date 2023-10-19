// canvas to use 
const canvas= document.getElementById('boarder');

//gets 2-d context
const context = canvas.getContext('2d');

// speed of game is by seconds
let speed = 7;

let tileCount = 20;
let tileSize = 18;
let headX = 10;
let headY = 10;

// speed of the snake
let xvelocity=0;
let yvelocity=0;



// game loop 
function drawGame(){
clearScreen();
changeSnakePosition();
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
    context.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize )
}

function changeSnakePosition(){
    headX = headX + xvelocity;
    headY = headY + yvelocity;
}

//adds movement to snake when arrow keys are pushed
document.body.addEventListener('keydown',keyDown);

function keyDown(event){
      //key code 38 moves snake up
    if(event.keyCode == 38)
    yvelocity = -1;
    xvelocity = 0;


    if(event.keyCode == 40)
    yvelocity = 1;
    xvelocity = 0;


}





drawGame();