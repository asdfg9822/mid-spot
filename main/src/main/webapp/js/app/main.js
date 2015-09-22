define(['jquery'], function ($) {

  console.log("==>main.js Excute..!!");

  // #sidebar2의 메인 타이틀 바꾸기

  // #sidebar2 첫 번째 아이템 제목, 내용 채우기
  //$('#sidebar2-item1-content').load('html/test.html');

  $('#groupMenu').click(function (event) {
    event.preventDefault();
    $('#sidebar2 #sidebar2-title-text').text("그룹");
    $('#sidebar2-item1-title').text("접속한 사용자입니다.");
    $('#sidebar2-item1-content').empty();
    $('#content').empty();
  });

  $('#destMenu').click(function (event) {
    event.preventDefault();
    $('#sidebar2 #sidebar2-title-text').text("목적 설정");
    $('#sidebar2-item1-title').text("목적지를 입력하세요.");
    $('#sidebar2-item1-content').load('html/dest_spec_search.html');
    $('#content').empty();
  });

  $('#startMenu').click(function (event) {
    event.preventDefault();
    $('#sidebar2 #sidebar2-title-text').text("출발지 설정");
    $('#sidebar2-item1-title').text("출발지를 입력하세요.");
    $('#sidebar2-item1-content').load('html/start_insert.html');
    $('#content').load('html/start.html');
  });

  $('#resultMenu').click(function (event) {
    event.preventDefault();
    $('#sidebar2-item1-title').text("click 해주세요 ~");
    $('#sidebar2 #sidebar2-title-text').text("결과보기");
    $('#sidebar2-item1-content').load('html/result_side.html');
    $('#content').load('html/result.html');
  });

  /* 

  $(document).on('login.success', function(event) {
    //특정 모듈만 가져오기
    var header = require('app/header');
    header.loadLoginInfo();
    $('#content').load('sub/board.html');
  });

  $(document).on('logout.success', function(event) {
    $('#content').load('sub/auth.html');
    var header = require('app/header');
    header.loadLoginInfo();
  });
  
  sidebar2_dest
  
  */

});