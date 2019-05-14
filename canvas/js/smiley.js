let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
//left mikey
context.beginPath();
context.arc(80,80,60,0,2*Math.PI);
context.closePath();
context.fillStyle = "#654321";
context.fill();
context.stroke();
//right mikey
context.beginPath();
context.arc(300,80,60,0,2*Math.PI);
context.closePath();
context.fillStyle = "#654321";
context.fill();
context.stroke();
//body
context.beginPath();
context.arc(200,200,150,0,2*Math.PI);
context.closePath();
context.fillStyle = "#b5651d";
context.fill();
context.stroke();
//nose
context.beginPath();
context.moveTo(170, 190);
context.lineTo(195, 215);
context.lineTo(195, 165);
context.fillStyle = "black";
context.fill();
//left eye
context.beginPath();
context.arc(130,130,40,0,2*Math.PI);
context.closePath();
context.fillStyle = "white";
context.fill();
context.stroke();
//left eye inner
context.beginPath();
context.arc(140,140,20,0,2*Math.PI);
context.closePath();
context.fillStyle = "black";
context.fill();
context.stroke();
//right eye
context.beginPath();
context.arc(270,130,40,0,2*Math.PI);
context.closePath();
context.fillStyle = "white";
context.fill();
context.stroke();
//right eye inner
context.beginPath();
context.arc(280,140,20,0,2*Math.PI);
context.closePath();
context.fillStyle = "black";
context.fill();
context.stroke();
//mouth
context.beginPath();
context.arc(200,220,100,0,.60*Math.PI);
context.closePath();
context.fillStyle = "red";
context.fill();
context.stroke();
