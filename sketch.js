
var pencil = []
function setup(){
   canvas= createCanvas(400,400);

   
}

function draw(){
    background(0);
   
if(mouseIsPressed){
    var position ={
        x: mouseX,
        y: mouseY
    }
    pencil.push(position);
}
     beginShape();
      stroke(250);
      strokeWeight(5);
      fill(0);
   for(var i = 0; i < pencil.length ; i++){
    vertex(pencil[i].x,pencil[i].y);
   }
   endShape();
   
}

