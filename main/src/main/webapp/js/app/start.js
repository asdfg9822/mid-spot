define(['jquery', 'app/common'], function ($) {





  return {
    init: function () {
      console.log('->start->init()');

      try {
        document.execCommand('BackgroundImageCache', false, true);
      } catch (e) {}

      require(['http://openapi.map.naver.com/openapi/naverMap.naver?ver=2.0&key=' + navaerMapKey], function () {
          console.log("naver map ok");
          var oCenterPoint = new nhn.api.map.LatLng(37.5010226, 127.0396037);
          nhn.api.map.setDefaultPoint('LatLng');
          oMap = new nhn.api.map.Map('startMap', {
            point: oCenterPoint,
            zoom: 10,
            enableWheelZoom: true,
            enableDragPan: true,
            enableDblClickZoom: false,
            mapMode: 0,
            activateTrafficMap: false,
            activateBicycleMap: false,
            minMaxLevel: [1, 14],
            size: new nhn.api.map.Size(700, 600)

          });

        }, function (err) {
          console.log("naver map error");
          //throw err; // maybe freak out a little?
        }),
        $(document).ready(function () {

          $("#start-search").click(function () {
            var address = $('#start-insert').val();
            /*-------*/
            $.ajax({
              url: "http://openapi.map.naver.com/api/geocode",
              dataType: "jsonp",
              type: "post",
              jsonp: "callback",
              data: {
                key: navaerMapKey, // API KEY
                query: "경기도 성남시 분당구 정자동 178-1", // 검색어
                output: "json" // JSONP 형식으로 호출하기 때문에 결과값 포맷은 json
              },
              success: function (data) {

                console.log(data.result.items[0].point.x);
                console.log(data.result.items[0].point.y);
                var oSize = new nhn.api.map.Size(28, 37);
                var oOffset = new nhn.api.map.Size(14, 37);
                var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);
                //icon 이미지를 바꿔서 사용할 수 있습니다.
                var oPoint = new nhn.api.map.LatLng(data.result.items[0].point.y, data.result.items[0].point.x); //마커포인트 

                var oMarker = new nhn.api.map.Marker(oIcon, {
                  title: '마커타이틀',
                  point: oPoint
                });

                oMap.setCenter(oPoint);


                //oMarker.setPoint(data.result.items[0].point.y, data.result.items[0].point.x);

                oMap.addOverlay(oMarker);
                var oLabel1 = new nhn.api.map.MarkerLabel(); // - 마커 라벨 선언. 
                oMap.addOverlay(oLabel1); // - 마커 라벨 지도에 추가. 기본은 라벨이 보이지 않는 상태로 추가됨. 

              }
            });
            /*-------*/
            $('#start-point').text(address);
          });
        });;


    }
  };
});