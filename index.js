// canvas to use 
const canvas= document.getElementById('boarder');
//gets 2-d context
const context = canvas.getContext('2d');
// speed of game is by seconds
let speed = 7;
// game loop updates screen
function drawGame(){
clearScreen();
 setTimeout(drawGame,1000/ speed);
 
function clearScreen(){
context.fillStlyle = 'black';
context.fillRect(0,0,canvas.clientWidth,canvas.height);
}

}


drawGame();