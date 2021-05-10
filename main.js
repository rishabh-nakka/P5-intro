function preload(){}
function setup(){
    canvas=createCanvas(600,450);
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    filter=""
}
function draw(){
    image(video,0,0,600,450)
    tint(filter)
}
function take_snapshot(){
    save("download.png")
}
function apply(){
 filter=document.getElementById("color_input").value;
}