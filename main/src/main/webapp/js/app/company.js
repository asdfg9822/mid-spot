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
    	  alert('업체 등록이 완료 되었습니다.');
      });
      		

    }, listSpec: function() {

		$('.categorys-select').click(function(event){
			event.preventDefault();
			console.log($(this).find('div').text().trim());
			var name = $(this).find('div').text().trim();
	    	
	        $.getJSON(contextRoot + '/json/dest/listSpec.do?spec_nm=' + name, function(result) {
	            var data = result.data;
	            console.log('data :'+data);
	            $('#specNm').val(data.spec_nm);
	          });
	        
			
		});
    	
        } /* listSpec() */
  };
});













