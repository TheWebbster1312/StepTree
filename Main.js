let canvas = document.getElementById("main_canvas");

canvas.width = window.width;
canvas.height = window.height;

ctx = canvas.getContext("2d");

console.log(canvas)
ctx.fillRect(20., 20, 20, 20);

