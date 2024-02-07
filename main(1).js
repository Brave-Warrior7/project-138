function back(){
    window.location="index.html";
}
Status="";
tv="";
function preload(){
    tv= loadImage("img1.jpg")
  }
  function setup(){
    canvas=createCanvas(570, 350);
    canvas.position(400, 150);
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Object Detecting"; 
    }
    function draw(){
        image(tv, 0, 0, 570 ,350);
    }
    
    function modelLoaded(){
      console.log("model Loaded");
      Status=true; 
      objectDetector.detect(tv, gotResults);
    }
    
    function gotResults(error, results){
      if(error){
        console.log("error");
      }
      else if(results){
        console.log(results);
      }
      
    }