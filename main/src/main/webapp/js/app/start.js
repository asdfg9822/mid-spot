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
			console.log('->start->init()');
			
			var moduleObj = this;

			var mapContainer = document.getElementById('map'), // 지도를 표시할 div
				mapOption = {
					center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
					level: 3
						// 지도의 확대 레벨
				};

			var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
			
			// 지도에 현재 모임 인원 보여주기
			var partiNo = sessionStorage.getItem('meetNo');
			
			console.log('partiNo:'+partiNo);
			
			$.getJSON(contextRoot
					+ '/json/start/partiMembList.do?parti_no='+partiNo,
					function(result) {
				
				var source = $('#parti-user-template').html();
				var template = handlebars.compile(source);
				var content = template(result);
				
				var size = result.size;
				
				console.log(size);
				// 주소로 좌표를 검색합니다
				
				// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
				var bounds = new daum.maps.LatLngBounds();    
				var markerList = new Array();

				for (var index=0; index < size; index++) {
					    
					    // 마커를 생성합니다
					    var marker = new daum.maps.Marker({
					        map: map, // 마커를 표시할 지도
					        clickable: true,
					        position: new daum.maps.LatLng(result.data[index].lat, result.data[index].lon), // 마커를 표시할 위치
					        title : result.data[index].memb_nm // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
					    });
					    markerList.push(marker);
					    
					    
					    if (result.data[index].file_path == null) {
					    	result.data[index].file_path = 'images/start-img/user.png';
					    }
					    
					 // 인포윈도우로 장소에 대한 설명을 표시합니다
						var infowindow = new daum.maps.InfoWindow({
							content: '<div style="width:100%; text-align: center;">'
								+ '<img src="'
								+ result.data[index].file_path
								+'" style="width:40%;  border-radius:50%; padding: 2%;" >'
								+ result.data[index].memb_nm 
								+ '</div>', // 인포윈도우에 표시될 내용입니다
							removable: true
						});
						
						infowindow.open(map, marker);
						
						// 마커에 클릭이벤트를 등록합니다
						daum.maps.event.addListener(marker, 'click', function() {
						      // 마커 위에 인포윈도우를 표시합니다
							console.log(this.ud);
							
							for (var index=0; index < size; index++) {
								if (result.data[index].memb_nm == this.ud) {
									
									infowindow.setContent('<div style="width:100%; text-align: center;">'
											+ '<img src="'
											+ result.data[index].file_path
											+'" style="width:40%;  border-radius:50%; padding: 2%;" >'
											+ result.data[index].memb_nm 
											+ '</div>');
									infowindow.open(map, markerList[index]);
								}
							} //선택한 마커의 정보를 출력
					
						});
						
					 bounds.extend(new daum.maps.LatLng(result.data[index].lat, result.data[index].lon));
					   
				} //for 문 인원수 별로
				 map.setBounds(bounds); // 지도에 마커의 위치만큼 표시
				 
				console.log(markerList);
				
			});

			$('#start-search-my').click(function () {
				// 주소-좌표 변환 객체를 생성합니다
				var geocoder = new daum.maps.services.Geocoder();

				// GeoLocation을 이용해서 접속 위치를 얻어옵니다
				navigator.geolocation.getCurrentPosition(function (position) {

					var lat = position.coords.latitude, // 위도
						lon = position.coords.longitude; // 경도

					var coord = new daum.maps.LatLng(lat, lon);
					var callback = function (status, result) {
						if (status === daum.maps.services.Status.OK) {
							
							var locPosition = new daum.maps.LatLng(lat, lon),
								message = '<div style="padding:5px;">현재 위치</div>'; // 인포윈도우에 표시될 내용입니다
						}

						// 마커와 인포윈도우를 표시합니다
						displayMarker(locPosition, message);
						
					};

					geocoder.coord2detailaddr({
						coord: coord,
						callback: callback
					});
				}); // 접속 위치 얻기

			}); // 내위치 찾기

			$('#start-search-place').click(function () {

				// 주소로 좌표를 검색합니다
				var geocoder = new daum.maps.services.Geocoder();
				
				// 입력 받을 키워드
				var keyword = document.getElementById('keyword').value;
				
//				ps.keywordSearch(keyword, placesSearchCB); 

				geocoder.addr2coord(keyword, function (status, result) {

					// 정상적으로 검색이 완료됐으면
					if (status === daum.maps.services.Status.OK) {

						var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);
						
						// 결과값으로 받은 위치를 마커로 표시합니다
						var marker = new daum.maps.Marker({
							map: map,
							clickable: true,
							position: coords,
							draggable: true
						});

						// 인포윈도우로 장소에 대한 설명을 표시합니다
						var infowindow = new daum.maps.InfoWindow({
							content: '<div style="padding:5px;">' + result.addr[0].title + '</div>', // 인포윈도우에 표시될 내용입니다
							removable: true
						});
						infowindow.open(map, marker);

						// 지도 중심좌표를 접속위치로 변경합니다
						map.setCenter(coords);
						moduleObj.insertStart(coords);
						
						// 마커에 클릭이벤트를 등록합니다
						daum.maps.event.addListener(marker, 'click', function() {
						      // 마커 위에 인포윈도우를 표시합니다
						      infowindow.open(map, marker);  
						});
						
						console.log(result.addr[0].lat, result.addr[0].lng);

					} else {
						alert('해당 주소가 없습니다.');
					}
				});

			}); /* 클릭 함수 */

			// 지도에 마커와 인포윈도우를 표시하는 함수입니다
			function displayMarker(locPosition, message) {

				// 마커를 생성합니다
				var marker = new daum.maps.Marker({
					map: map,
					clickable: true,
					position: locPosition,
					draggable: true
				});

				var iwContent = message, // 인포윈도우에 표시할 내용
					iwRemoveable = true;

				// 인포윈도우를 생성합니다
				var infowindow = new daum.maps.InfoWindow({
					content: iwContent,
					removable: iwRemoveable
				});

				// 인포윈도우를 마커위에 표시합니다
				infowindow.open(map, marker);

				// 지도 중심좌표를 접속위치로 변경합니다
				map.setCenter(locPosition);
				
				// 마커에 클릭이벤트를 등록합니다
				daum.maps.event.addListener(marker, 'click', function() {
				      // 마커 위에 인포윈도우를 표시합니다
				      infowindow.open(map, marker);  
				});

				moduleObj.insertStart(locPosition);
								
			}

		},
		insertStart: function(locPosition) {
			console.log('locPosition'+locPosition);
			
			var lat = locPosition.zb;
	        var lon = locPosition.yb;
	        
	        console.log("위도"+lat);
	        console.log("경도"+lon);

			var meetNo = sessionStorage.getItem('meetNo');
			console.log("접속된 방 번호 :" + meetNo);
			var member = JSON.parse(sessionStorage.getItem('member'));
			$('#parti_no').val(meetNo);
			$('#memb_no').val(member.memberNo);

			$('#insertLat1').click(function (event) {
				event.preventDefault();
				console.log('클릭');
				$.ajax(contextRoot + '/json/start/insert.do', {
					method: 'POST',
					dataType: 'json',
					data: {
						parti_no: meetNo,
						memb_no: member.memberNo,
						lat: lat,
						lon: lon
					},
				});
				console.log(lat, lon);
			});
			
		}, /* insert() */
		partiMembList: function(partiNo) {
			var partiNo = sessionStorage.getItem('meetNo');
			
			console.log('partiNo:'+partiNo);
			
			$.getJSON(contextRoot
					+ '/json/start/partiMembList.do?parti_no='+partiNo,
					function(result) {
				
				var source = $('#parti-user-template').html();
				var template = handlebars.compile(source);
				var content = template(result);
				$(".parti-user-info").html(content);
				
				var size = result.size;
				
				var tag = "<div id='parti-info-total' style='padding-left:10%;'>"+size+"</div>";
				
				$("#parti-info").after(tag);
				
			});
			
		} ///partiMembList()
		

	};
});








