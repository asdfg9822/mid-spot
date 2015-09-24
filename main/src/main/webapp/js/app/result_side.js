define(['jquery', 'app/common'], function ($) {
  return {
    init: function () {

      console.log("->result_side->init()");


      $(document).ready(function () {

        var submenu = $(".map_hide")
        var submenu1 = $(".map_hide1")
        var submenu2 = $(".map_hide2")

        // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
        $(".result_map_menu>.button_map_first").click(function () {
          var submenu = $(this).next(".map_hide");

          // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
          if (submenu.is(":visible")) {
            submenu.slideUp();
          } else {
            submenu.slideDown();
            submenu1.slideUp();
            submenu2.slideUp();
          }
        });

        $(".result_map_menu>.button_map_second").click(function () {
          var submenu1 = $(this).next(".map_hide1");

          if (submenu1.is(":visible")) {
            submenu1.slideUp();
          } else {
            submenu1.slideDown();
            submenu.slideUp();
            submenu2.slideUp();
          }
        });

        $(".result_map_menu>.button_map_third").click(function () {
          var submenu2 = $(this).next(".map_hide2");

          if (submenu2.is(":visible")) {
            submenu2.slideUp();
          } else {
            submenu2.slideDown();
            submenu.slideUp();
            submenu1.slideUp();
          }
        });
      });









    }
  };
});
