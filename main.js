function preload() {
mustache=loadImage('https://i.postimg.cc/fb4SL0Lf/png-clipart-handlebar-moustache-beard-moustache-fashion-monochrome-thumbnail.png')
}

function setup() {
canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.size(500,400);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("poseNet is initalized");
}
function gotPoses(results) {
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x-25;
    nosey=results[0].pose.nose.y;
console.log("nosex="+nosex+" nosey="+nosey);
}
}
nosex=0;
nosey=0;
function draw() {
image(video,0,0,500,400);
//fill("gold");
//stroke("red");
//circle(nosex,nosey,20);
image(mustache,nosex,nosey,60,30)
}

function take_snapshot() {
save('GURU.png');
}