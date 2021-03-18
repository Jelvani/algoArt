function setup() {
    createCanvas(1000, 1000);
    background(0);
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

function drawTree(iter,cordX,cordY,angle,length,color){
    if(iter<=0){
        return
    }
    var prevX = cordX;
    var prevY = cordY;
    
    
    ctx.strokeStyle = 'rgba(' + (iter*20) + ',' + (iter*10) + ',' + (iter*10+50) + ',' + 1 + ')'
    ctx.lineWidth = 1;
    ctx.beginPath();
    var cords = getAngle(prevX,prevY,angle,length);
    ctx.moveTo(prevX,prevY);
    ctx.lineTo(cords[0],cords[1]);
    ctx.stroke();
    //drawTree(iter-1,cords[0],cords[1],angle+20+Math.random()*10,length/(Math.random()/2+1));
    //drawTree(iter-1,cords[0],cords[1],angle-20+Math.random()*10,length/(Math.random()/2+1));
    drawTree(iter-1,cords[0],cords[1],angle+50,length/1.2);
    drawTree(iter-1,cords[0],cords[1],angle-50,length/1.2);

    
}
function getRandomArbitrary(min, max) {//return rand number in range
    return Math.random() * (max - min) + min;
  }
  


seed = 0.1;
function drawFern(x,y,scale,prob){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    a =  (Math.sin(seed)+1)/6+0.2
    seed+=0.1;
    for(z = 0;z<10000;z++){
    ctx.strokeStyle = random_green();
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.rect(x*50+450,y*50, scale, scale);
    ctx.stroke();
    if(prob< 0.01){//stem
        x = 0;
        y = 0.16*y;
    }
    else if(prob < 0.85){//curl
        x = 0.85*x + 0.04*y;
        y = -0.04*x + 0.85*y + 3.6;
    }
    else if(prob < 0.92){//left half leaves
        x = a*x - 0.26*y;
        y = 0.23*x + 0.22*y + 1.6; 
    }
    else{
        x = -a*x + 0.28*y;//right half leaves
        y = 0.26*x + 0.24*y + 0.44; 
    }
    prob = Math.random();
}
}

//drawTree(15,250,350,-90,60);



