function back(){
    window.location="index.html";
}
bottle="";
function preload(){
    bottle= loadImage("bottles.jpg")
  }
function setup(){
canvas=createCanvas(600, 350);
canvas.position(400, 220);
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Object Detecting"; 
}
function draw(){
    image(bottle, 0, 0, 600 ,350);
}
function modelLoaded(){
    console.log("model Loaded");
    Status=true; 
    objectDetector.detect(bottle, gotResults);
  }
  
  function gotResults(error, results){
    if(error){
      console.log("error");
    }
    else if(results){
      console.log(results);
    }
    
  }