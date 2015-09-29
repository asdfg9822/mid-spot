define(['jquery', 'app/common'], function ($) {

  return {

    init: function () {

      $('#btnDTInit').click(function (event) {
        event.preventDefault();
        init_comp_tb_insert();
      });

      function init_comp_tb_insert() {
        console.log("init_comp_tb_insert() Excute..!!");

        var inputData = [
        "강남역 미즈컨테이너",
        "강남역 하남돼지집",
        "하남시 하남돼지집",
        "선릉역 술집",
        "강남역 노래방",
        "하남시 노래방"
      ];
        for (var i = 0; i < inputData.length; i++) {
          console.log("[" + inputData[i] + "] input");
          company_info_search(inputData[i]);
        }
      }

      $('#btnCompSearch').click(function (event) {
        event.preventDefault();
        var search = $('#txtCompSearch').val();
        company_info_search(search);
      });

      function company_info_search(search) {

        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        var infowindow = new daum.maps.InfoWindow({
          zIndex: 1
        });

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            center: new daum.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        var map = new daum.maps.Map(mapContainer, mapOption);

        // 장소 검색 객체를 생성합니다
        var ps = new daum.maps.services.Places();

        // 키워드로 장소를 검색합니다
        ps.keywordSearch(search, placesSearchCB);

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB(status, data, pagination) {

          //My : 검색된 장소를 서버에 보내는 작업을 합니다.
          company_info_writer(data);

          if (status === daum.maps.services.Status.OK) {

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new daum.maps.LatLngBounds();

            for (var i = 0; i < data.places.length; i++) {
              displayMarker(data.places[i]);
              bounds.extend(new daum.maps.LatLng(data.places[i].latitude, data.places[i].longitude));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }
        }

        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {

          // 마커를 생성하고 지도에 표시합니다
          var marker = new daum.maps.Marker({
            map: map,
            position: new daum.maps.LatLng(place.latitude, place.longitude)
          });

          // 마커에 클릭이벤트를 등록합니다
          daum.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.title + '</div>');
            infowindow.open(map, marker);
          });
        }

      }

      // My: DB에 저장하기 위해 서버 사이드로 데이터를 보냅니다.
      function company_info_writer(data) {
        $.ajax('http://127.0.0.1:8888/company/insert.do', {
          method: 'get',
          dataType: 'json',
          crossDomain: true,
          data: data,
          success: function (result) {
            console.log(result);
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log("company_info_writer() ajax Error");
            console.log(textStatus + ", " + errorThrown);
          }
        });
      }

    }
  };
});
