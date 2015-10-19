define([ 'jquery', 'handlebars', 'app/common' ], function($, handlebars) {

	console.log("==>meet.js Excute..!!");

	console.log($('#side-name').text());
	return {

		insertmeet : function() {

			$.ajax(contextRoot + '/json/meet/insert.do', {
				method : 'POST',
				dataType : 'json',
				data : {
					meetName : $('#meetName').val(),
					meetDate : $('#meetDate').val(),
					memberNo : 1

				},
				success : function(result) {
					if (result.data == 'success') {
						alert('입력 성공입니다.');
					} else {
						alert('입력할 수 없습니다.');
					}
				}

			});
			console.log('insertmeet');

		},

		listMeet : function() {
			var moduleObj = this;
			$.getJSON(contextRoot + '/json/meet/list.do', function(result) {

				var tbody = $('#listTable tbody');
				$('.data-row').remove();

				// handlebars 라이브러리를 이용하여 테이블 tr 태그 생성
				var source = $('#meetList').html();
				var template = handlebars.compile(source);
				var content = template(result);
				$('#listTable tbody').html(content);

			});
		},
		init : function() {
			console.log('->meet->init()');

			var moduleObj = this;

			$('#meet-Submit').click(function(event) {
				console.log("meet-Submit");
				event.preventDefault();
				moduleObj.insertmeet();

			});
		}
	}

});