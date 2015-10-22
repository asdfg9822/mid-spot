define([ 'jquery', 'handlebars', 'bootstrap', 'jquery.ui.widget',
		'jquery.iframe-transport', 'jquery.fileupload', 'canvas-to-blob',
		'load-image', 'jquery.fileupload-process', 'jquery.fileupload-image',
		'jquery.fileupload-audio', 'jquery.fileupload-video',
		'jquery.fileupload-validate', 'app/common' ], function($, handlebars) {

	return {
		init : function() {
			console.log('->company->init()');
			
//			$('.companyList-info-table').hide();
//			$('#company-info').hide();

			$('.categorys-select').click(function (event) {
				event.preventDefault();

				var attrId = $(this).find('div').text().trim();

				function getOffsetTop(el) {
					var top = -100;
					if (el.offsetParent) {
						do {
							top += el.offsetTop;
						} while (el = el.offsetParent);
						return [top];
					}
				}
				if (attrId == '업체 등록') {
					window.scroll(0, getOffsetTop(document.getElementById("categoryNm1")));
				} else if (attrId == '상세 스펙 등록') {
					window.scroll(0, getOffsetTop(document.getElementById("categoryNm2")));
				} else if (attrId == '등록된 업체 정보') {
					window.scroll(0, getOffsetTop(document.getElementById("categoryNm3")));
				}  
			});
			
			$.getJSON(contextRoot + '/json/company/listCompany.do', function(result) {
				var source = $('#company-template').html();
				var template = handlebars.compile(source);
				var content = template(result);
				$(".company-info-list").html(content);
				
				
				var source2 = $('#parti-user-template').html();
				var template2 = handlebars.compile(source2);
				var content2 = template2(result);
				$(".parti-user-info").html(content2);
				
				
				
			});
			$('.company-info').hide();
			
//			$('.company-info-list').click(function(event) {
//				event.preventDefault();
//				console.log($(this).parents().children(".companyList-info-table"));
//				console.log($(this).parents().children(".companyList").find('div'));
//				$('.companyList-info-table').toggle();
//			});
			
			$(document).ready(function () {
		        $(document).on('click', ".company-info-list .companyList", function (event) {
		            event.preventDefault();
		            console.log($(this).text());
		            console.log($(this).attr('no'));
		            
//		            console.log($(this).find('.companyList-info-table').find('tr').find('.comp_nm').find('td'));
//		            console.log($(this).find('.company-info').children());
		            
//		            $(this).slideToggle("slow");
//		            var slideFind = $(this).parents().children(".detail-explain-find");
//		            var slideShare = $(this).parents().children(".detail-explain-share");
//		            var slideMore = $(this).parents().children(".detail-explain-more");
//		            slideFind.slideUp();
//		            slideShare.slideUp();
//		            slideMore.slideToggle("slow");
		          })
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
