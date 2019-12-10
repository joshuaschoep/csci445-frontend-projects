var canvas = document.getElementById("smile");
var ctx = canvas.getContext("2d")
var button = document.getElementById("smile-button")

function drawFace(ctx){
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = "yellow";
    ctx.fill();

    //ctx.fillStyle = "black";
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    //ctx.fill();

    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
    //ctx.fill();

    ctx.stroke();
}

function drawSmile(ctx){
    drawFace(ctx);

    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);

    ctx.stroke();
}

function drawFrown(ctx){
    drawFace(ctx);

    ctx.moveTo(110, 110);
    ctx.arc(75, 110, 35, 0, Math.PI, true);

    ctx.stroke();
}

var isSmile = true;

function toggleSmile(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (isSmile){
        drawFrown(ctx);
        button.innerHTML = "Make me smile";
        isSmile = false;
    }else{
        drawSmile(ctx);
        button.innerHTML = "Make me frown";
        isSmile = true;
    }
}

function checkClick(event){
    if(
        Math.sqrt(Math.pow(event.offsetX - 75, 2) 
            + Math.pow(event.offsetY - 75, 2)) < 50
    ){
        toggleSmile();
    }
}

button.onclick = toggleSmile;
canvas.onclick = checkClick;

drawSmile(ctx);
button.innerHTML = "Make me frown";