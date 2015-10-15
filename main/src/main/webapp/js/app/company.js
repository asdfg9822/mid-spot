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

		},
		listSpec : function() {

			$('.categorys-select').click(
				function(event) {
					event.preventDefault();
					console.log($(this).find('div').text().trim());
					var name = $(this).find('div').text().trim();

					$.getJSON(contextRoot + '/json/dest/list.do?cate_nm='+name
							, function(result) {
						// handlebars 라이브러리를 이용하여 테이블 tr 태그 생성
						var source = $('#spec-template').html();
						var template = handlebars.compile(source);
						var content = template(result);
						$("#content-placeholder").html(content);
						
						console.log(result);
					});
				});

		},/* listSpec() */
		
		insertSpec: function() {
			var moduleObj = this;
			
			$('#company-spec-insert').click(function(event){
				var data = {};
				$('#content-placeholder tr').each(function() {
					data[$(this).find('th').text()] = $(this).find('input[type=text]').val();
				});
				
				var jsonStr = JSON.stringify(data);
				console.log(jsonStr);
				
				
				$.getJSON(contextRoot + '/json/dest/insertSpec.do', {
					method : 'POST',
					dataType : 'json',
					data : {
						spec_nm : $(this).find('th').text(),
						cate_no : $('#meetDate').val(),
						spec_vl : $(this).find('input[type=text]').val(),
						comp_nm : 

					},
					success : function(result) {
						if (result.data == 'success') {
							alert('입력 성공입니다.');
						} else {
							alert('입력할 수 없습니다.');
						}
					}

				});
				
			});
			
			
		}

	};
});










