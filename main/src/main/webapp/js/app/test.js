define(['jquery'], function ($) {

  console.log("==>test.js Excute..!!");

  // #sidebar2의 메인 타이틀 바꾸기
  $('#sidebar2 #sidebar2-title-text').text("메인 제목");

  // #sidebar2 첫 번째 아이템 제목, 내용 채우기
  $('#sidebar2-item1-title').text("부제목을 입력하세요");
  $('#sidebar2-item1-content').load('html/test.html');

  // #sidebar2 두 번째 아이템 제목  
  // #sidebar2 두 번째 아이템 내용






  /* 
  $('#main > header').load('header.html');
  $('#main > footer').load('footer.html');
  $('#content').load('sub/auth.html');

  $('#boardMenu').click(function(event) {
    event.preventDefault();
    $('#content').load('sub/board.html');
  });

  $('#memberMenu').click(function(event) {
    event.preventDefault();
    $('#content').load('sub/member.html');
  });

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