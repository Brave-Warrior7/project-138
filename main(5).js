function back(){
    window.location="index.html";
}
fb="";
function preload(){
    fb= loadImage("fb.jpg")
  }
function setup(){
canvas=createCanvas(400, 350);
canvas.position(500, 220);
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Object Detecting"; 
}
function draw(){
    image(fb, 0, 0, 400 ,350);
}
function modelLoaded(){
    console.log("model Loaded");
    Status=true; 
    objectDetector.detect(fb, gotResults);
  }
  
  function gotResults(error, results){
    if(error){
      console.log("error");
    }
    else if(results){
      console.log(results);
    }
    
  }