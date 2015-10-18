define(['jquery', 'handlebars', 'bootstrap', 'app/common'], function ($, handlebars) {

	return {
		init: function () {

			var moduleObj = this;
			var member = JSON.parse(sessionStorage.getItem('member'));
			member.memberNo = 2;

			$.getJSON(contextRoot + '/json/meet/myMeetList.do', {
				membNo: member.memberNo
			}, function (result) {
				console.log(result);

				var source = $('#meetListScript').html();
				var template = handlebars.compile(source);
				var content = template(result);

				$('#meetListArea').html(content);

			});

			$(document).on('click', '.enter_btn', function (event) {
				event.preventDefault();
				sessionStorage.setItem('meetNo', 2);
				console.log("session meetNo = " + sessionStorage.getItem('meetNo'));
			});
		}
	}

});
