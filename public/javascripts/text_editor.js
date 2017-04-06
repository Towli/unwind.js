$(document).ready(function() {
	var pad = $('#writing-pad');
	var padContent = "";
	var isSaving = false;

	pad.attr('placeholder', "Tell us your story...");

	/* On pad-content change, begin auto-saving process */
	pad.on('input',function() {
		if (isSaving)
			return;

		padContent = pad.val();
		
		isSaving = true;
		$.post('/write', { data: padContent }).done(function(data) {
			console.log('Post request complete.');
			setTimeout(function() {
				isSaving = false;
				console.log("Timeout expired - ready to save again.");
			}, 2000);
		});
	
	});

});