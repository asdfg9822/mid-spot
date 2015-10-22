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
				var categoryList = new Array(); // 배열을 만들어서 선택한 id값 저장할 배열 생성
				var category = new Array();

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

				$('.btn_cate_select').click(function (event) {
					event.preventDefault();
					$(".category-selected").remove();
					
					// 카테고리 3개 이상 등록 불가능하게 예외처리
					if (category.length < 3) {
						category.push($(this).find('div').text().trim());

					} else if (category.length = 3) {
						category.shift();
						category.push($(this).find('div').text().trim());
					}
					
					if (categoryList.length < 3) {
						$.each(category, function(i, el){
							if($.inArray(el, categoryList) === -1) categoryList.push(el);
						});
					} else if (categoryList.length = 3){
						categoryList.shift();
					
						$.each(category, function(i, el){
							if($.inArray(el, categoryList) === -1) categoryList.push(el);
						});
					} else if (categoryList.length = 4){
						categoryList.shift();
						$.each(category, function(i, el){
							if($.inArray(el, categoryList) === -1) categoryList.push(el);
						});
					}
					
					for (var index=0; index < categoryList.length; index++) {

						var tag = "<button class='category-selected' id='"+categoryList[index]+"'>"
						+categoryList[index]+"</button>";

						$(".category-selected-list").after(tag);
					}
					
				});

				$('#insertRcmd').click(function (event) {
					console.log('인서트 실행 준비');
					event.preventDefault();

					var meetNo = sessionStorage.getItem('meetNo');
					console.log("접속된 방 번호 :" + meetNo);
					
//					var membNo = 
					var member = JSON.parse(sessionStorage.getItem('member'));
					var memberNo = member.memberNo;
					console.log('접속자 번호 :'+memberNo);
					
					$.getJSON(contextRoot + '/json/dest/listPermision.do?memb_no='
							+ memberNo, function(result) {
						
						console.log(result.data);
						console.log('===================');

						if (result.data[0].cate_no == 0) {
							console.log(result.data[0].cate_nm +'은 cate_no가 없음');

							if((result.result == "yes") && (meetNo == result.data[0].meet_no)) {
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
								$( "#destMenu" ).trigger( "click" );
							} else {
								if ($("#category-permision-info").text() == '') {
									var permisiontag = "카테고리를 입력할 수 있는 권한이 없습니다.";
									$("#category-permision-info").append(permisiontag);
								}
							}

							///insert
						} else {
							console.log('이미 자료가 있어요.');

							$.ajax(contextRoot + '/json/dest/delete.do', {
								method: 'POST',
								dataType: 'json',
								data: {
									meet_no: meetNo
								},
							});

							console.log('삭제 완료');

							if((result.result == "yes") && (meetNo == result.data[0].meet_no)) {
								//선택한 카테고리갯수 만큼 입력
								console.log(categoryList);

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
								$( "#destMenu" ).trigger( "click" );
							} else {
								if ($("#category-permision-info").text() == '') {
									var permisiontag = "카테고리를 입력할 수 있는 권한이 없습니다.";
									$("#category-permision-info").append(permisiontag);
								}
							}

						} ///update
						
					});
				});


			}, //init 종료
			listPartiSelect: function() {
				var meetNo = sessionStorage.getItem('meetNo');
				var cateNm = new Array();
				var cateNmList = new Array();

				console.log('meetNo'+meetNo);

				$.getJSON(contextRoot + '/json/dest/listPartiSelect.do?meet_no='
						+ meetNo, function(result) {

					for (var index=0; index < result.data.length; index++) {

						if (result.data[index].cate_nm1 == '음식점') {
							console.log(result.data[index].cate_nm);

							var tag = "<div class='category' >"
								+result.data[index].cate_nm
								+"</div>";
							$("#음식").after(tag);

						} else if (result.data[index].cate_nm1 == '가정,생활') {
							console.log(result.data[index].cate_nm);

							var tag = "<div class='category' >"
								+result.data[index].cate_nm
								+"</div>";
							$("#가정").after(tag);

						} else if (result.data[index].cate_nm1 == '여행') {
							console.log(result.data[index].cate_nm);

							var tag = "<div class='category' >"
								+result.data[index].cate_nm
								+"</div>";
							$("#여행").after(tag);

						} else if (result.data[index].cate_nm1 == '스포츠,레저') {
							console.log(result.data[index].cate_nm);

							var tag = "<div class='category' >"
								+result.data[index].cate_nm
								+"</div>";
							$("#스포츠").after(tag);

						} else if (result.data[index].cate_nm1 == '문화,예술') {
							console.log(result.data[index].cate_nm);

							var tag = "<div class='category' >"
								+result.data[index].cate_nm
								+"</div>";
							$("#문화").after(tag);

						} else if (result.data[index].cate_nm1 == '교육,학문') {
							console.log(result.data[index].cate_nm);

							var tag = "<div class='category' >"
								+result.data[index].cate_nm
								+"</div>";
							$("#교육").after(tag);

						} else if (result.data[index].cate_nm1 == '사회,공공기관') {
							console.log(result.data[index].cate_nm);

							var tag = "<div class='category' >"
								+result.data[index].cate_nm
								+"</div>";
							$("#공공기관").after(tag);

						} else if (result.data[index].cate_nm1 == '교통,수송') {
							console.log(result.data[index].cate_nm);

							var tag = "<div class='category' >"
								+result.data[index].cate_nm
								+"</div>";
							$("#교통").after(tag);

						}

					}

				});
			} // listPartiSelect 종료
	};
});





















