var canvas = document.getElementById("canvas");
canvas.width = window.innerHeight;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.scale(2,2);
ctx.fillStyle = "Black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
mouseX = 0
mouseY = 0

canvas.addEventListener('mousemove', e => {

    mouseX = e.offsetX;
    mouseY = e.offsetY;
    
  });

function drawPoint(x,y,x1,y1,color1,color2){
    x = x+canvas.width/2;
    y = y+canvas.height/2;
    x1 = x1+canvas.width/2;
    y1 = y1+canvas.height/2;

    var grad= ctx.createLinearGradient(x, y, x1, y1);
    grad.addColorStop(0, color1);
    grad.addColorStop(1, color2);

    ctx.strokeStyle = grad;
    
    ctx.beginPath();
    //ctx.arc(x, y, 7, 0, 2 * Math.PI);
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fill();
}

function getAngle(curX,curY,angle,length){
    newX = curX + (Math.cos(angle*Math.PI/180))*length
    newY = curY + (Math.sin(angle*Math.PI/180))*length

    return [newX,newY]
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
function random_green() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*150+50) + ',230,' + o(r()*150-50) + ',' + r().toFixed(1) + ')';
}

function drawTree(iter,cordX,cordY,angle,length){
    if(iter<=0){
        return
    }
    var prevX = cordX;
    var prevY = cordY;
    
    
    ctx.strokeStyle = random_green()
    ctx.lineWidth = 1;
    ctx.beginPath();
    var cords = getAngle(prevX,prevY,angle,length);
    ctx.moveTo(prevX,prevY);
    ctx.lineTo(cords[0],cords[1]);
    ctx.stroke();
    setTimeout(function()
    {drawTree(iter-1,cords[0],cords[1],angle+20+Math.random()*10,length/(Math.random()/2+1));}
,100);
setTimeout(function()
{drawTree(iter-1,cords[0],cords[1],angle-20+Math.random()*10,length/(Math.random()/2+1))}
,100);

    
}

drawTree(12,250,500,-90,60);