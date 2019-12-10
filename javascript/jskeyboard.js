var canvas = document.getElementById("picture");
var ctx = canvas.getContext("2d")
var pic = new Image();

pic.onload = function draw() {
    ctx.drawImage(pic, 0, 0, 75, 75);
}
pic.src = "../images/car.png";

var picX = 0;
var picY = 0;

function move(x, y){
    if(picX + x < 0 || picX + x + 75 > canvas.width
        || picY + y < 0 || picY + y + 75 > canvas.height)
    {
        return
    }
    picX += x;
    picY += y;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pic, picX, picY, 75, 75);
}

function handleKeypress(event){
    if(event.code === "ArrowUp"){
        move(0, -5);
    }else if(event.code === "ArrowDown"){
        move(0, 5);
    }else if(event.code === "ArrowLeft"){
        move(-5, 0);
    }else if(event.code === "ArrowRight"){
        move(5, 0)
    }
}

document.addEventListener("keydown", handleKeypress, false);

ctx.drawImage(pic, 10, 10);