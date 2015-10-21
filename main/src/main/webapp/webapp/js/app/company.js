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
			});

		},
		listSpec : function() {
			$('.categorys-select').click(
					function(event) {
						event.preventDefault();
						var name = $(this).find('div').text().trim();

						$.getJSON(contextRoot + '/json/dest/list.do?cate_nm='
								+ name, function(result) {
							var source = $('#spec-template').html();
							var template = handlebars.compile(source);
							var content = template(result);
							$("#content-placeholder").html(content);
						});
					});

		},/* listSpec() */

		insertSpec : function() {
			var moduleObj = this;

			$('#company-spec-insert').click(
					function(event) {
						var specNmList = new Array();
						var cateNoList = new Array();
						var specVlList = new Array();
						var compNmList = new Array();

						$('#content-placeholder tr').each(
								function() {
									specNmList.push($(this).find('th').text());
									specVlList.push($(this).find(
											'input[type=text]').val());
									cateNoList.push($(this).find('th').attr(
											'cate_no'));
								});

						for (index = 0; index < specNmList.length; index++) {
							compNmList.push($('#compNm').find(
							'input[type=text]').val());

							if (specVlList[index] == '') {
								specVlList[index] = '알수 없음';
							}

							$.ajax(contextRoot + '/json/dest/insertSpec.do', {
								method : 'POST',
								dataType : 'json',
								data : {
									spec_nm : specNmList[index],
									cate_no : cateNoList[index],
									spec_vl : specVlList[index],
									comp_nm : compNmList[index]
								}
							});

						} /* for 문 종료 */


					});

		}

	};
});
