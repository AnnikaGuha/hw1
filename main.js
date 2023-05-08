img="";
status="";
Objects=[];
objectDetector="";
var obj=document.getElementById("input").innerHTML;
function preload(){
    
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
 }
 function start(){ 
    objectDetector = ml5.objectDetector('cocossd');
   
}
function modelLoaded(){
    console.log("model is initiallised");
status=true;
}
function draw(){
    image(video,0,0,380,380);
    if (status !=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResults);
        for(i=0;i<Objects.length;i++){
fill(r,g,b);
percent=floor(Objects[i].confidence*100);
text(Objects[i].label+""+percent+"&",Objects[i].x+15,Objects[i].y+15);
noFill();
stroke(r,g,b);
rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height); if(Objects[i].label==obj){
    document.getElementById("notify").innerHTML=obj+"is found 😎";
}else{
    document.getElementById("notify").innerHTML="sorry"+obj+"is not found 😕 please try to search a different object"
}

        }
    }
      }
   
  

function gotResults(error,results){
    if(error){
        console.log(error);
    }
        console.log(results);
        Objects=results;

       
    }