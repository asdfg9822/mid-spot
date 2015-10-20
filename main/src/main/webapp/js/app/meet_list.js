define(['jquery', 'handlebars', 'bootstrap', 'app/common'], function ($, handlebars) {

	return {
		init: function () {

			var moduleObj = this;
			//초기 Meet List
			moduleObj.listMeet();
			/*------- Events --------*/
			$('#btnMeetSubmit').off('click').click(function (e) {
				e.preventDefault();
				moduleObj.insertMeet();
			});

			$(document).on('click', '.btnMeetRemove', function (e) {
				e.preventDefault();
				sessionStorage.setItem('removeMeetNo', $(this).attr('data-no'));
			});

			$('#btnMeetRemove').off('click').click(function (e) {
				e.preventDefault();
				moduleObj.deleteMeet(sessionStorage.getItem('removeMeetNo'));
			});

			/*---- End of Events ----*/

		},
		insertMeet: function () {
			var member = JSON.parse(sessionStorage.getItem('member'));

			var moduleObj = this;

			$.ajax(contextRoot + '/json/meet/insert.do', {
				method: 'POST',
				dataType: 'json',
				data: {
					meetName: $('#meetName').val(),
					meetDate: $('#meetDate').val(),
					memberNo: member.memberNo

				},
				success: function (result) {
					if (result.data == 'success') {
						$('#modalMeetCreate').modal('hide');
						moduleObj.listMeet();

					} else {

					}
				}

			});
		},
		listMeet: function () {
			var member = JSON.parse(sessionStorage.getItem('member'));

			$.getJSON(contextRoot + '/json/meet/myMeetList.do', {
				membNo: member.memberNo
			}, function (result) {

				// isMaster (Room Master)

				handlebars.registerHelper('compare', function (lvalue, rvalue, options) {

					if (arguments.length < 3)
						throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

					var operator = options.hash.operator || "==";

					var operators = {
						'==': function (l, r) {
							return l == r;
						},
						'===': function (l, r) {
							return l === r;
						},
						'!=': function (l, r) {
							return l != r;
						},
						'<': function (l, r) {
							return l < r;
						},
						'>': function (l, r) {
							return l > r;
						},
						'<=': function (l, r) {
							return l <= r;
						},
						'>=': function (l, r) {
							return l >= r;
						},
						'typeof': function (l, r) {
							return typeof l == r;
						}
					}

					if (!operators[operator])
						throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);

					var result = operators[operator](lvalue, rvalue);

					if (result) {
						return options.fn(this);
					} else {
						return options.inverse(this);
					}

				});

				var member = JSON.parse(sessionStorage.getItem('member'));

				$.extend(result, {
					'memberNo': member.memberNo
				});
				console.log(result);


				$.extend(result, {
					'url': contextRoot + "/test.html?meetNo="
				});


				// Meet Count Zero Exception Processing
				if (result.data.length > 0) {
					var source = $('#meetListScript').html();
				} else {
					var source = $('#meetZeroScript').html();
				}

				var template = handlebars.compile(source);
				var content = template(result);

				// Load Meet
				$('#meetListArea').html(content);

			});

			$(document).on('click', '.enter_btn', function (event) {
				event.preventDefault();
				sessionStorage.setItem('meetNo', $(this).attr('data-no'));
				console.log("session meetNo = " + sessionStorage.getItem('meetNo'));
				$(document).trigger('enterMeet');
			});
		},
		deleteMeet: function (meetNo) {

			var moduleObj = this;

			$.getJSON(contextRoot + '/json/meet/delete.do', {
				meetNo: meetNo
			}, function (result) {
				$('#modalMeetRemove').modal('hide');

				if (result.data === "success") {
					console.log("Meet (" + meetNo + ") Remove " + result.data);
				}

				moduleObj.listMeet();

			});
		}
	}
});
