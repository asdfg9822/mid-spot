define([ 'jquery', 'handlebars', 'bootstrap', 'jquery.ui.widget',
		'jquery.iframe-transport', 'jquery.fileupload', 'canvas-to-blob',
		'load-image', 'jquery.fileupload-process', 'jquery.fileupload-image',
		'jquery.fileupload-audio', 'jquery.fileupload-video',
		'jquery.fileupload-validate', 'app/common' ], function($, handlebars) {

	return {
		init : function() {
			console.log('->company->init()');

			$('#company-main-input').click(function(event) {
				event.preventDefault();
				$('#content').load('html/company.html');
			});

			$('#company-insert').click(function(event) {
				event.preventDefault();
				$('#content').load('html/company_main.html');
				alert('업체 등록이 완료 되었습니다.');
			});

		}, listSpec : function() {
		      $.getJSON(contextRoot + '/json/member/list.do',  function(result) {
		          
		          var tbody = $('#listTable tbody');
		          $('.data-row').remove();
		          
		          // handlebars 라이브러리를 이용하여 테이블 tr 태그 생성 
		          var source = $('#template1').html();
		          var template = handlebars.compile(source);
		          var content = template(result);
		          $('#listTable tbody').html(content);
		          
		      });
		    }//listSpec()
	};
});














