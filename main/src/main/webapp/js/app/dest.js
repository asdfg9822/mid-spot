define(['jquery'], function ($) {

  console.log("==>dest.js Excute..!!");

  var selectedText = $("#combobox option:selected").text();

  // #sidebar2의 메인 타이틀 바꾸기
  $('#sidebar2 #sidebar2-title-text').text("목적 설정");

  // #sidebar2 첫 번째 아이템 제목, 내용 채우기
  $('#sidebar2-item1-title').text("목적을 설정하세요.");
  //$('#sidebar2-item1-content').load('html/test.html');

  $(document).ready(function () {

    $("#traffic").click(function () {
      $("#categoryTraffic").show()
      $("#closetraffic").click(function () {
        $("#categoryTraffic").hide();
        $("#submittraffic option:seleted").val();
        $("TrafficList[name=name]").val();

      });
    });
  });

  $(document).ready(function () {

    $("#food").click(function () {
      $("#categoryFood").show()
      $("#closefood").click(function () {
        $("#categoryFood").hide();
      });
    });
  });
  $(document).ready(function () {

    $("#cafe").click(function () {
      $("#categoryCafe").show()
      $("#closecafe").click(function () {
        $("#categoryCafe").hide();
      });
    });
  });
  $(document).ready(function () {

    $("#stay").click(function () {
      $("#categoryStay").show()
      $("#closestay").click(function () {
        $("#categoryStay").hide();
      });
    });
  });

  $(document).ready(function () {

    $("#hospital").click(function () {
      $("#categoryHospital").show()
      $("#closehospital").click(function () {
        $("#categoryHospital").hide();
      });
    });
  });


  $(document).ready(function () {

    $("#bank").click(function () {
      $("#categoryBank").show()
      $("#closebank").click(function () {
        $("#categoryBank").hide();
      });
    });
  });
  $(document).ready(function () {

    $("#parking").click(function () {
      $("#categoryParking").show()
      $("#closeparking").click(function () {
        $("#categoryParking").hide();
      });

    });
  });
  $(document).ready(function () {

    $("#gasstation").click(function () {
      $("#categoryGasStation").show()
      $("#closegasstation").click(function () {
        $("#categoryGasStation").hide();
      });

    });
  });

  $(document).ready(function () {

    $("#living").click(function () {
      $("#categoryLiving").show()
      $("#closeliving").click(function () {
        $("#categoryLiving").hide();
      });

    });
  });

});