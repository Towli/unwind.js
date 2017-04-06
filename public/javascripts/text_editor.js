$(document).ready(function() {
	var pad = $('#writing-pad');
	var padContent = "";

	pad.attr('placeholder', "Tell us your story...");

	/* On pad-content change, begin auto-saving process */
	pad.on('input',function() {
		padContent = pad.val();
		$.post('/write', { data: padContent }).done(function(data) {
			console.log('Post request complete.');
		});
	});

});