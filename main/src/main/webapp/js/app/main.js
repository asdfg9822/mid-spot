define(['jquery','app/common'], function ($) {

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

  $('#side-profile').click(function () {
    console.log("profile clicked!! ");
    Login();
  });

  $('#side-setting').click(function () {
    console.log("logout clicked!! ");

    FB.api("/me/permissions", "DELETE", function (response) {
      console.log("delete");
      console.log(response); //gives true on app delete success 
    });

    FB.logout(function () {
      document.location.reload();
    });
  });


  window.fbAsyncInit = function () {
    /*FB.init({
  appId: '410218975833438', // Set YOUR APP ID
  status: true, // check login status
  cookie: true, // enable cookies to allow the server to access the session
  xfbml: true // parse XFBML
});*/

    FB.init({
      appId: FacebookAppId, // Set YOUR APP ID
      status: true, // check login status
      cookie: true, // enable cookies to allow the server to access the session
      xfbml: true // parse XFBML
    });


    FB.Event.subscribe('auth.authResponseChange', function (response) {
      if (response.status === 'connected') {
        document.getElementById("message").innerHTML += "<br>Connected to Facebook";
        //SUCCESS

      } else if (response.status === 'not_authorized') {
        document.getElementById("message").innerHTML += "<br>Failed to Connect";

        //FAILED
      } else {
        document.getElementById("message").innerHTML += "<br>Logged Out";

        //UNKNOWN ERROR
      }
    });

  };

  function Login() {
    console.log("MY> Login()..Excute..!!");
    FB.login(function (response) {
      if (response.authResponse) {
        getUserInfo();
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {
      scope: 'public_profile,email,user_photos,user_friends'
    });

  }
  
  function insertUserInfo(response) {
	  
      $.ajax(contextRoot + '/json/member/insert.do',
              {
                method: 'POST',
                dataType: 'json',
                data: {
                  name: response.name,
                  email: response.email,
                  userId: response.id,
                  getSite: "FACEBOOK",
                  imgUrl: response.picture.data.url
                },
                success: function(result) {
                  if (result.data == 'success') {
                    $('#cancelBtn').click();
                    console.log("User Info Input Success..!!");
                  } else {
                	  console.log("User Info Input Fail..!!");
                  }
                }
              });
  }

  
  function getUserInfo() {
    FB.api('/me?fields=name,email,picture,friends', function (response) {

    	
    
      console.log(response);
    	  //mid-spot Database insert "User Info"
    	  insertUserInfo(response);
    	  
    	  //Change User name, Profile Image
    	  $('#side-name').text(response.name);
    	  $('#side-profile').attr('src', response.picture.data.url);
      
    });
  }

  function Logout() {
    FB.logout(function () {
      document.location.reload();
    });
  }

  // Load the SDK asynchronously
  (function (d) {;
    var js, id = 'facebook-jssdk',
      ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref)
  }(document));






});