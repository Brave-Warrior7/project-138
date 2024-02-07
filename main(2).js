function back(){
    window.location="index.html";
}
bed="";
function preload(){
    bed= loadImage("img2.jpg")
  }
function setup(){
canvas=createCanvas(570, 350);
canvas.position(400, 250);
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Object Detecting"; 
}
function draw(){
    image(bed, 0, 0, 570 ,320);
}

function modelLoaded(){
    console.log("model Loaded");
    Status=true; 
    objectDetector.detect(bed, gotResults);
  }
  
  function gotResults(error, results){
    if(error){
      console.log("error");
    }
    else if(results){
      console.log(results);
    }
    
  }