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
		'app/common'
		], function ($, handlebars) {

  return {
    init: function () {
      console.log('->company->init()');
      
      $('#company-main-input').click(function (event) {
    	  event.preventDefault();
    	  $('#content').load('html/company.html');
      });
      
      $('#company-insert').click(function (event) {
    	  event.preventDefault();
    	  $('#content').load('html/company_main.html');
      });

    }
  };
});