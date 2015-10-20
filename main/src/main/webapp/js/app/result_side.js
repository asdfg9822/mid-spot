define(['jquery', 'app/common'], function ($) {
  return {
    init: function () {
      console.log("->result_side->init()");


      $(document).ready(function () {

        var first = false;
        var second = true;
        var third = true;

        $(document).on('click', '.result_map_menu> #pickSection-0', function () {

          if (first == true && second == false && third == true) {

            $("#pickSection-1").animate({
              "top": "+=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "-=50px"
            }, "slow");

            first = false;
            second = true;

          } else if (first == true && second == true && third == false) {

            $("#pickSection-1").animate({
              "top": "+=150px"
            }, "slow");
            $("#pickSection-2").animate({
              "top": "+=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "-=100px"
            }, "slow");

            first = false;
            third = true;


          } else {

          }

        });


        $(document).on('click', '.result_map_menu> #pickSection-1', function () {

          if (first == false && second == true && third == true) {
            $("#pickSection-1").animate({
              "top": "-=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "+=50px"
            }, "slow");
            second = false;
            first = true;
          } else if (first == true && second == true && third == false) {
            $("#pickSection-2").animate({
              "top": "+=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "-=50px"
            }, "slow");
            second = false;
            third = true;


          } else {
//            $("#pickSection-1").animate({
           //              "top": "0px"
           //            }, "slow");
           //
           //            $("#stationMap").animate({
           //              "top": "0px"
           //            }, "slow");
           //            first = false;
           //            second = true;
          }
        });


        $(document).on('click', '.result_map_menu> #pickSection-2', function () {

          if (first == false && third == true && second == true) {
            $("#pickSection-1").animate({
              "top": "-=150px"
            }, "slow");
            $("#pickSection-2").animate({
              "top": "-=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "+=100px"
            }, "slow");
            first = true;
            third = false;
          } else if (first == true && third == true && second == false) {
            $("#pickSection-2").animate({
              "top": "-=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "+=50px"
            }, "slow");
            first = true;
            second = true;
            third = false;
          } else {
//            $("#pickSection-1").animate({
         //              "top": "0px"
         //            }, "slow");
         //            $("#pickSection-2").animate({
         //              "top": "0px"
         //            }, "slow");
         //
         //            $("#stationMap").animate({
         //              "top": "0px"
         //            }, "slow");
         //            first = false;
         //            third = true;
          }


        });
      });

    }
  };
});
