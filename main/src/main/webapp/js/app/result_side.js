define(['jquery', 'app/common'], function ($) {
  return {
    init: function () {

      console.log("->result_side->init()");

      $('#rcmdPlace2 .menu_button').click(function (event) {

        $("#map").animate({
          "bottom": "-=50px"
        }, "slow");

        $("#rcmdPlace2 .menu_button").animate({
          "bottom": "+=150px"
        }, "slow");

      });

      $('#rcmdPlace3 .menu_button').click(function (event) {

        $("#map").animate({
          "bottom": "-=50px"
        }, "slow");

        $("#rcmdPlace3 .menu_button").animate({
          "bottom": "+=150px"
        }, "slow");

      });

      require(['//apis.daum.net/maps/maps3.js?apikey=' + window.daumMapKey], function () {
        console.log("daum map ok");
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
          mapOption = {
            center: new daum.maps.LatLng(37.5010226, 127.0396037), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
          };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new daum.maps.Map(mapContainer, mapOption);
      });




      $(document).ready(function () {
        // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
        $(".result_map_menu>.menu_button").click(function () {
          var submenu = $(this).next(".map_hide");

          // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
          if (submenu.is(":visible")) {
            submenu.slideUp();
          } else {
            submenu.slideDown();
          }
        });
      });


    }
  };
});