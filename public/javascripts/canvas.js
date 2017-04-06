/**
* Canvas editor client script
**/
$(document).ready(function() {
	/* Constants */
	var COLOUR_BLACK = "rgb(0,0,0)";
	var CANVAS_WIDTH = 1000;
  var CANVAS_HEIGHT = 1000;

 	/* Get canvas & context */
  var canvas = document.getElementById('pad');
  var context = canvas.getContext("2d");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

});