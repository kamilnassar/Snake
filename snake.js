
//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;


window.onload = function() {
    bourd = document.getElementById("board");
    board.hight = rows = blockSize;
    board.hight = rows = blockSize;
    context = board.getContext("2d");

    update();
}

function update() {
    context.fillStyle="black"
    context.fillRect(0, 0, board.width, board.hight);
}