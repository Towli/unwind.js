/**
* Canvas editor client script
**/
$(document).ready(onReady);

/* Constants */
var COLOUR_BLACK = "rgb(0,0,0)";
var CANVAS_WIDTH = 1000;
var CANVAS_HEIGHT = 1000;

var canvas;
var context;
var mouseDown;
var brushColour;
var downloadLink;
var resetLink;

var mouse = {
	oldX: "",
	oldY: "",
	x: "",
	y: ""
}

/* Init */
function onReady() {
  initCanvas();
  initColourChooser();
  downloadLink = $('a.canvas-action#download');
  resetLink = $('a.canvas-action#reset');
	mouseDown = false;
	/* Attach event listeners to the Canvas object */
	canvas.addEventListener('mousemove', handleMouseMove);
	canvas.addEventListener('mousedown', handleMouseDown);
	canvas.addEventListener('mouseup', handleMouseInactive);
	canvas.addEventListener('mouseleave', handleMouseInactive);
  resetLink.click(resetCanvas);
  downloadLink.click(downloadImage);
}

function initCanvas() {
  canvas = document.getElementById('paint-canvas');
  context = canvas.getContext('2d');
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  context.fillStyle = "white";
  context.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  brushColour = COLOUR_BLACK;
}
function initColourChooser() {
	$('#picker').spectrum({
    showButtons: false,
    change: handleColourChange
  });
}

/* Get the mouse position by using the ratio of the canvas bitmap and the actual canvas
  JS element */
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
  scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
  scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for 
  return {
    oldX: mouse.x,
    oldY: mouse.y,
    x: (event.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (event.clientY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}

/* Draw using the path building API */
function draw(mousePosition) {
  context.beginPath();
  context.moveTo(mouse.oldX, mouse.oldY);
  context.lineTo(mouse.x, mouse.y);
  context.strokeStyle = brushColour;
  context.lineWidth = 2;
  context.stroke();
  context.closePath();
}

function resetCanvas() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.fillStyle = "white";
  context.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

/* Convert the Canvas object to a DataURI, build a bytestream object 
  and set to the downloadLink's href attribute */
function downloadImage() {
  var image = canvas.toDataURL('image/png');
  var imageByteStream = image.replace('image/png', 'image/octet-stream');
  downloadLink.attr('href', imageByteStream);
}

/* Event handlers */
function handleMouseMove() {
	mouse = getMousePos(canvas, event);
	if(mouseDown)
    draw();
  console.log(mouse);
}
function handleMouseDown() {
	mouseDown = true;
	if (mouseDown)
		draw();
}
function handleMouseInactive() {
	mouseDown = false;
  console.log('Mouse inactive');
}
function handleColourChange(newColour) {
	var newColourRGB = 'rgb('+parseInt(newColour._r) +','+ parseInt(newColour._g) +','+ parseInt(newColour._g)+')';
	brushColour = newColourRGB;
	console.log(brushColour);
}