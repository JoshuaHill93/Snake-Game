// canvas to use 
const canvas= document.getElementById('boarder');

//gets 2-d context
const context = canvas.getContext('2d');


class SnakeBody{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

// speed of game is by seconds
let speed = 7;

let tileCount = 20;
let tileSize = 18;
let headX = 16;
let headY = 16;

//using const because the variable will not change 
const snakeBodys = [];



// adds two squares to the body when game starts
let tailLength = 2;

// postion of food at the start of the game
let foodX = 5;
let foodY = 5;


// speed of the snake
let xVelocity=0;
let yVelocity=0;

let score = 0;


// game loop 
function drawGame(){
    changeSnakePosition();
    let result = isGameOver();
    if(result){
        return;
    }

    clearScreen();




checkFoodCollision();
drawSnake();

drawScore();

drawFood();
setTimeout(drawGame,1000/ speed);
}

//if the snake hits any og the walls the text will display game over
function isGameOver(){
let gameOver = false;

if(yVelocity ===0 && xVelocity ===0)
return false;

if(headX < 0){
    gameOver = true;
}

 else if(headX === tileCount){
  gameOver = true
}

 else if(headY < 0){
    gameOver = true
}

 else if(headY === tileCount){
    gameOver = true
  }
  

for(let i = 0; i < snakeBodys.length; i++ ){
    let body = snakeBodys[i];
    if(body.x === headX && body.y === headY){
    gameOver = true;
    break;
    }
}


if(gameOver){
    context.fillStyle = "green"
    context.font = "50px"
    context.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2)
}
return gameOver;

}

function drawScore(){
    context.fillStyle = "white";
    context.font = "12px verdana "
    context.fillText("Score" +  score, canvas.width -200, 10);
}

function clearScreen(){
context.fillStyle = 'black';
context.fillRect(0,0,canvas.width,canvas.height);
}
// adds snake color and shape
function drawSnake(){

    
    //color of snake body
    context.fillStyle = 'blue';

 // snake body will increase when food is eaten
for(let i =0; i < snakeBodys.length; i++){
        let body = snakeBodys [i];
        context.fillRect(body.x * tileCount, body.y * tileCount, tileSize, tileSize)
    }
     // puts body where snake head was 
    snakeBodys.push(new SnakeBody(headX,headY));
    while (snakeBodys.length > tailLength){
     //adds snake body one after another 
        snakeBodys.shift();

    }
    //color of snake head
    context.fillStyle = 'red'; 
    context.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize );


}


//when snake head goes over food, the  food goes to a random place on the boared
function checkFoodCollision(){
if (foodX === headX && foodY == headY){
   foodX = Math.floor(Math.random() * tileCount);
   foodY = Math.floor(Math.random() * tileCount);

   //adds length to body 
tailLength++;
   //adds points to score board once food is eaten
score++;
    }
}


function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}
//adds food to the board
function drawFood(){
    context.fillStyle = "white";
    context.fillRect(foodX * tileCount ,foodY * tileCount, tileSize, tileSize)
}



//adds movement to snake when arrow keys are pushed
document.body.addEventListener('keydown',keyDown);

function keyDown(event){
 //snake goes up
if(event.keyCode == 38){
    if(yVelocity == 1)
        return;
    yVelocity =-1;
    xVelocity =0;
}
//snake goes down
if(event.keyCode == 40){
    if(yVelocity == -1)
    return;
    yVelocity =1;
    xVelocity =0;
}
//snake goes left
if(event.keyCode == 37){
    if(xVelocity == 1)
    return;
    yVelocity = 0;
    xVelocity = -1;
}
// snake goes right 
if(event.keyCode == 39){
    if(xVelocity == -1)
    return;
    yVelocity = 0;
    xVelocity = 1;
}

}



drawGame();