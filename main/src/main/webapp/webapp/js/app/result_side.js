define(['jquery', 'app/common'], function ($) {
  return {
    init: function () {
      console.log("->result_side->init()");

      $(document).ready(function () {

        var first = false;
        var second = true;
        var third = true;

        $(document).on('click','.result_map_menu>.button_map_first', function() {

          if (first == true && second == false && third == true) {

            $(".button_map_second").animate({
              "top": "+=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "-=52px"
            }, "slow");

            first = false;
            second = true;

          } else if (first == true && second == true && third == false) {

            $(".button_map_second").animate({
              "top": "+=150px"
            }, "slow");
            $(".button_map_third").animate({
              "top": "+=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "-=105px"
            }, "slow");

            first = false;
            third = true;


          } else {

          }

        });


        $(document).on('click','.result_map_menu>.button_map_second', function() {

          if (first == false && second == true && third == true) {
            $(".button_map_second").animate({
              "top": "-=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "+=52px"
            }, "slow");
            second = false;
            first = true;
          } else if (first == true && second == true && third == false) {
            $(".button_map_third").animate({
              "top": "+=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "-=52px"
            }, "slow");
            second = false;
            third = true;


          } else {
            $(".button_map_second").animate({
              "top": "0px"
            }, "slow");

            $("#stationMap").animate({
              "top": "0px"
            }, "slow");
            first = false;
            second = true;
          }
        });


        $(document).on('click','.result_map_menu>.button_map_third', function() {

          if (first == false && third == true && second == true) {
            $(".button_map_second").animate({
              "top": "-=150px"
            }, "slow");
            $(".button_map_third").animate({
              "top": "-=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "+=105px"
            }, "slow");
            first = true;
            third = false;
          } else if (first == true && third == true && second == false) {
            $(".button_map_third").animate({
              "top": "-=150px"
            }, "slow");

            $("#stationMap").animate({
              "top": "+=52px"
            }, "slow");
            first = true;
            second = true;
            third = false;
          } else {
            $(".button_map_second").animate({
              "top": "0px"
            }, "slow");
            $(".button_map_third").animate({
              "top": "0px"
            }, "slow");

            $("#stationMap").animate({
              "top": "0px"
            }, "slow");
            first = false;
            third = true;
          }


        });
      });

    }
  };
});
