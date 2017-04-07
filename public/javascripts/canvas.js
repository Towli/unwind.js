/**
* Canvas editor client script
**/
/* Function expressions for hoisting (in order to effectively test) */
$(document).ready(onReady);

/* Constants */
var COLOUR_BLACK = "rgb(0,0,0)";
var CANVAS_WIDTH = 1000;
var CANVAS_HEIGHT = 1000;

/* Get canvas & context */
var canvas;
var context;

/* Temporarily global.. better implementation? */
var mouse = {
	oldX: "",
	oldY: "",
	x: "",
	y: ""
}

function onReady() {
	canvas = document.getElementById('paint-canvas');
	context = canvas.getContext("2d");
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;

	/* Attach event listeners to the Canvas object */
	canvas.addEventListener('mousemove', handleMouseMove);
	canvas.addEventListener('mousedown', handleMouseDown);
	//canvas.addEventListener('mouseup', handleMouseInactive);
  //canvas.addEventListener('mouseleave', handleMouseInactive);
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

function handleMouseMove(event) {
	mouse = getMousePos(canvas, event);
  console.log(mouse);
}

function handleMouseDown(event) {
	// draw()
}

function draw(mousePosition) {
	// draw a path from the old.x,y to the new x,y
}