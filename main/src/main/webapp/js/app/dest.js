define([
		'jquery',
		'handlebars',
		'bootstrap',
		'jquery.ui.widget',
		'jquery.iframe-transport',
		'jquery.fileupload',
		'canvas-to-blob',
		'load-image',
		'jquery.fileupload-process',
		'jquery.fileupload-image',
		'jquery.fileupload-audio',
		'jquery.fileupload-video',
		'jquery.fileupload-validate',
		'modernizr',
		'hoverdir',
		'app/common'
		], function ($, handlebars) {

	return {
		init: function () {
			console.log("==>dest.js Excute..!!");

			$('#portfolioModal1').click(function(event) {
				event.preventDefault();
				console.log('#portfolioModal1');
				
			});

		} //init 종료
	};
});