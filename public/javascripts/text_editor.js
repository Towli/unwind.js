/**
* Text editor client script
* - On user input, begin 'listening'.
* - Should auto-save after X seconds of user input has ended.
**/
$(document).ready(function() {
	
	var pad = $('#writing-pad');
	var padContent, timer;
	var timerDuration = 2000;
	pad.attr('placeholder', "Tell us your story...");

	padEventHandler();

	/* On pad-content change, begin auto-saving process */
	function padEventHandler() {
		pad.on('input',function() {
			listen(timerDuration, save);
		});
	}

	/* 'Listen' to event by starting a timer and waiting for a 
			silence duration to be met */
	function listen(silenceDuration, callback) {
		clearTimeout(timer);
		timer = setTimeout(callback, silenceDuration);
	}

	/* POST content of pad to the server */
	function save() {
		padContent = pad.val();
		$.post('/write', { data: padContent }).done(function(data) {
				console.log('Post request complete.');
		});
	}

});