// canvas to use 
const canvas= document.getElementById('boarder');
//gets 2-d context
const context = canvas.getContext('2d');
// speed of game is by seconds
let speed = 7;
// game loop updates screen
function drawGame(){
 console.log('draw game');
 //
 setTimeout(drawGame,1000/ speed);

}


drawGame();