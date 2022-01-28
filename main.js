var canvas=document.getElementById("canvaz");
ctx=canvas.getContext("2d");
var  mouseEvent="empty";
var previousx,previousy;
color="gold";
width=4;
canvas.addEventListener("mousedown",mousedow1);
function mousedow1(e){
    color=document.getElementById("colorinput").value;
    width=document.getElementById("widthinput").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",mouseu2);
function mouseu2(e){
mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", mouseleav3);
function mouseleav3(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",mousemov4);
function mousemov4(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
if(mouseEvent="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;


console.log("last position of x and y coordinates= ");
console.log("x = "+previousx+"y = "+previousy);
ctx.moveTo(previousx,previousy);

console.log("current position of x and y coordinates= ");
console.log("x = "+currentx + " y= "+currenty);
ctx.lineTo(currentx,currenty);

ctx.stroke();
}    
previousx=currentx;
previousy=currenty;
}
function clickme(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}