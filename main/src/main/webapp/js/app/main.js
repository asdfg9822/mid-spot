 define(['jquery', 'app/common', 'bootstrap'], function ($) {

 	console.log("==>main.js Excute..!!");

 	/*------------Test Value Zone ---------*/
 	sessionStorage.setItem('meetNo', 23);


 	/*------------End of Test Value Zone ---------*/


 	//Sidebar Toggle
 	$("#menuToggle").click(function (e) {
 		e.preventDefault();
 		console.log("mesnuToggle");
 		$("#wrapper").toggleClass("toggled");
 	});

 	$('#companyMenu').click(function (event) {
 		event.preventDefault();
 		$('#content').load('html/company.html');
 	}); // company 이동 기능

 	$('#homeMenu').click(function (event) {
 		event.preventDefault();
 		$('#content').load('html/home.html');
 	});

 	$('#groupMenu').click(function (event) {
 		event.preventDefault();
 		$('#content').load('html/meet_list.html');
 	});
 	//Header 목적 Button
 	$('#destMenu').click(function (event) {
 		event.preventDefault();
 		$('#sidebar-item1-content').load('html/dest_spec_search.html');
 		$('#content').load('html/dest.html');
 	});
 	//Header 출발 Button
 	$('#startMenu').click(function (event) {
 		event.preventDefault();
 		$('#sidebar-item1-title').remove();
 		$('#sidebar-item1-content').remove();
 		$('#sidebar-item2-content').load('html/start_side.html');
 		$('#content').load('html/start.html');
 	});
 	//Header 중간여기 Button
 	$('#resultMenu').click(function (event) {
 		event.preventDefault();
 		$('#content').load('html/result_jh.html');
 	});

 	//Login Info, Login Form Toggle
 	$('#loginSuccess').click(function () {
 		console.log("login");
 		$('#sideLoginInfo').toggle();
 		$('#sideLoginForm').toggle();
 		$('#headLoginInfo').toggle();
 		$('#headLoginForm').toggle();
 	});

 	//FACEBOOK Login Button
 	$('#btnFBLogin').click(function () {
 		Login();
 	});

 	//FACEBOOK Logout Button
 	$('#logout').click(function () {
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

 		FB.init({
 			appId: FacebookAppId, // Set YOUR APP ID
 			status: true, // check login status
 			cookie: true, // enable cookies to allow the server to access the session
 			xfbml: true // parse XFBML
 		});

 		FB.Event.subscribe('auth.authResponseChange', function (response) {
 			if (response.status === 'connected') {
 				console.log("connected to FACEBOOK");
 				//SUCCESS
 				getProfileInfo();
 			} else if (response.status === 'not_authorized') {
 				console.log("not_authorized");
 			} else {
 				console.log("logged out");
 			}
 		});

 	};

 	var getUserInfo = function () {
 		FB.api('/me?fields=name,email,picture,friends', function (response) {
 			$.ajax(contextRoot + '/json/member/fbGetUser.do', {
 				method: 'POST',
 				dataType: 'json',
 				data: {
 					userId: response.id
 				},
 				success: function (result) {
 					console.log("FACEBOOK User Info GET..!!");
 					sessionStorage.setItem('member', JSON.stringify(result.member));
 					console.log(result);
 				}
 			});

 		});
 	}

 	function Login() {
 		console.log("MY> Login()..Excute..!!");
 		FB.login(function (response) {
 			if (response.authResponse) {
 				getProfileInfo();
 			} else {
 				console.log('User cancelled login or did not fully authorize.');
 			}
 		}, {
 			scope: 'public_profile,email,user_photos,user_friends'
 		});

 	}

 	function insertUserInfo(response, callback) {

 		$.ajax(contextRoot + '/json/member/insert.do', {
 			method: 'POST',
 			dataType: 'json',
 			data: {
 				name: response.name,
 				email: response.email,
 				userId: response.id,
 				getSite: "FACEBOOK",
 				imgUrl: response.picture.data.url
 			},
 			success: function (result) {
 				console.log("FACEBOOK User Info Insert..!!");
 				if (typeof callback === 'function') {
 					callback();
 				}
 			}
 		});
 	}

 	function updateUserInfo(response, callback) {

 		$.ajax(contextRoot + '/json/member/update.do', {
 			method: 'POST',
 			dataType: 'json',
 			data: {
 				name: response.name,
 				email: response.email,
 				userId: response.id,
 				getSite: "FACEBOOK",
 				imgUrl: response.picture.data.url
 			},
 			success: function (result) {
 				console.log("FACEBOOK User Info Update..!!");
 				if (typeof callback === 'function') {
 					callback();
 				}
 			}
 		});
 	}

 	function fbUserExist(response, callback) {
 		$.ajax(contextRoot + '/json/member/fbExist.do', {
 			method: 'POST',
 			dataType: 'json',
 			data: {
 				userId: response.id
 			},
 			success: function (result) {
 				if (result.data == 'yes') {
 					console.log("User Exist..!!");
 					updateUserInfo(response, callback);
 				} else {
 					insertUserInfo(response, callback);
 					console.log("User No..!!");
 				}
 			}
 		});
 	}

 	function getProfileInfo() {
 		FB.api('/me?fields=name,email,picture,friends', function (response) {

 			//Checking FB User && Update User Info
 			fbUserExist(response, getUserInfo);

 			//Change User name, Profile Image
 			$('#sideUserName').text(response.name);
 			$('#sideUserImg').attr('src', response.picture.data.url);
 			$('#headUserName').text(response.name);
 			$('#headUserImg').attr('src', response.picture.data.url);

 			//Login From , Login Info Toggle
 			$('#sideLoginInfo').show();
 			$('#headLoginInfo').show();
 			$('#sideLoginForm').hide();
 			$('#headLoginForm').hide();
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
