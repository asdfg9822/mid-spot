define(['jquery', 'app/common'], function ($) {


  return {
    init: function () {
        console.log('->start->init()');
        console.log('->start->init()');


        var mapContainer = document.getElementById('startMap'), // 지도를 표시할 div
          mapOption = {
            center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        var map = new daum.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new daum.maps.services.Geocoder();

        //입력한 출발지 정보를 받아옵니다
        $('#startSearch').click(function () {
          var startPoint = $('#startInsert').val();

          console.log(startPoint);
          // 주소로 좌표를 검색합니다
          geocoder.addr2coord('성남시 분당구 정자동 178-1', function (status, result) {

            // 정상적으로 검색이 완료됐으면
            if (status === daum.maps.services.Status.OK) {

              var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);

              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new daum.maps.Marker({
                map: map,
                position: coords
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              var infowindow = new daum.maps.InfoWindow({
                content: '<div style="padding:5px;">출발지</div>'
              });
              infowindow.open(map, marker);
            }
          });
        });







      } // End of init()
  }; // End of Return

}); // End of Define
