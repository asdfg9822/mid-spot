define([
		'jquery',
		'handlebars',
		'bootstrap',
		'jquery.ui.widget',
		'jquery.iframe-transport',
		'jquery.fileupload',
		'canvas-to-blob',
		'load-image',
		'app/common'
		], function ($, handlebars) {

	return {
		init: function () {
				console.log("==>dest.js Excute..!!");

				$('.categoryNm').click(function (event) {
					event.preventDefault();
					console.log($(this).text().trim());
				});

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
					if (attrId == '음식') {
						window.scroll(0, getOffsetTop(document.getElementById("categoryNm1")));
					} else if (attrId == '가정,생활') {
						window.scroll(0, getOffsetTop(document.getElementById("categoryNm2")));
					} else if (attrId == '여행') {
						window.scroll(0, getOffsetTop(document.getElementById("categoryNm3")));
					} else if (attrId == '스포츠') {
						window.scroll(0, getOffsetTop(document.getElementById("categoryNm4")));
					} else if (attrId == '문화,예술') {
						window.scroll(0, getOffsetTop(document.getElementById("categoryNm5")));
					} else if (attrId == '교육,학문') {
						window.scroll(0, getOffsetTop(document.getElementById("categoryNm6")));
					} else if (attrId == '공공기관') {
						window.scroll(0, getOffsetTop(document.getElementById("categoryNm7")));
					} else {
						window.scroll(0, getOffsetTop(document.getElementById("categoryNm8")));
					}
				});
/*d*/
				var categoryList = new Array(); // 배열을 만들어서 선택한 id값 저장할 배열 생성

				$('.btn_cate_select').click(function (event) {
					event.preventDefault();
					
					categoryList.push($(this).find('div').text().trim());
					
					var tag = "<th class='category-selected'>"
						+$(this).find('div').text().trim()
						+"</th>";
					
					$(".category-selected-list").append(tag);
					
					console.log(tag);
//					
				});


				$('#insertRcmd').click(function (event) {
					console.log('인서트 실행 준비');
					event.preventDefault();

					var meetNo = sessionStorage.getItem('meetNo');
					console.log("접속된 방 번호 :" + meetNo);
					
					
					if(meetNo != null) {
						//선택한 카테고리갯수 만큼 입력
						for (index = 0; index < categoryList.length; index++) {
							$.ajax(contextRoot + '/json/dest/insert.do', {
								method: 'POST',
								dataType: 'json',
								data: {
									meet_no: meetNo,
									cate_nm: categoryList[index]
								},
							});
							$('#category-permision-info').remove();
						}
					} else {
						if ($("#category-permision-info").text() == '') {
							var permisiontag = "카테고리를 입력할 수 있는 권한이 없습니다.";
							$("#category-permision-info").append(permisiontag);
						}
						
					}
					console.log('입력 종료');

				});

			} //init 종료
	};
});
