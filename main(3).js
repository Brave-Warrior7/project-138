function back(){
    window.location="index.html";
}
Desk="";
function preload(){
    Desk= loadImage("desk.jpg")
  }
function setup(){
canvas=createCanvas(500, 350);
canvas.position(420, 220);
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Object Detecting"; 
}
function draw(){
    image(Desk, 0, 0, 500 ,350);
}

function modelLoaded(){
    console.log("model Loaded");
    Status=true; 
    objectDetector.detect(Desk, gotResults);
  }
  
  function gotResults(error, results){
    if(error){
      console.log("error");
    }
    else if(results){
      console.log(results);
    }
    
  }