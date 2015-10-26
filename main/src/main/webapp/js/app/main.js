define(
		['jquery', 'app/common', 'bootstrap'],
	function ($) {

		console.log("==>main.js Excute..!!");

		/*------------Test Value Zone ---------*/
		// sessionStorage.setItem('meetNo', 4);
		// sessionStorage.setItem('sessionStatus', false);
		/*------------End of Test Value Zone ---------*/

		// Sidebar Toggle
		$("#menuToggle").click(function (e) {
			e.preventDefault();
			console.log("mesnuToggle");
			$("#wrapper").toggleClass("toggled");
		});

		$(document).on('click', '.navbar-nav a', function () {
			console.log("okok");
			$('.active').removeClass('active');
			$(this).addClass('active');
			$('.navbar-collapse,.collapse').removeClass('in');
		});

		$('#resultCompany').click(function (event) {
			event.preventDefault();
			$('#sidebar-item1-title').remove();
			$('#sidebar-item1-content').remove();
			$('#sidebar-item2-content').load('html/company_side.html');
			$('#content').load('html/company.html');
			$('#homeMenu, #meetMenu, #destMenu, #startMenu, #resultMenu, #resultCompany').removeClass('bgColor');
			$('#resultCompany').addClass('bgColor');

		}); // company 이동 기능


		$('#homeMenu').click(function (event) {
			event.preventDefault();
			$('#content').load('html/home.html');
			$('#homeMenu, #meetMenu, #destMenu, #startMenu, #resultMenu, #resultCompany').removeClass('bgColor');
			$('#homeMenu').addClass('bgColor');
		});

		$('#meetMenu').click(function (event) {
			event.preventDefault();

			$('#sidebar-item2-title > b').text('모임을 만드세요.');
			$('#sidebar-item2-content').load('html/meet_side.html');
			$('#content').load('html/meet_list.html');
			$('#homeMenu, #meetMenu, #destMenu, #startMenu, #resultMenu, #resultCompany').removeClass('bgColor');
			$('#meetMenu').addClass('bgColor');
		});

		// Master Meet Enter Trigger
		$(document).on('enterDestMeet', function (event) {
			$('#destMenu').trigger('click');
		});
		// Part iMeet Enter Trigger
		$(document).on('enterPartiMeet', function (event) {
			$('#startMenu').trigger('click');
		});
		// MyMeet Enter Trigger
		$(document).on('enterMyMeet', function (event) {
			$('#meetMenu').trigger('click');
		});


		// Header 목적 Button
		$('#destMenu').click(function (event) {
			event.preventDefault();
			$('#sidebar-item1-title').remove();
			$('#sidebar-item1-content').remove();
			$('#sidebar-item2-content').load('html/dest_side.html');
			$('#content').load('html/dest.html');
			$('#homeMenu, #meetMenu, #destMenu, #startMenu, #resultMenu, #resultCompany').removeClass('bgColor');
			$('#destMenu').addClass('bgColor');
		});
		// Header 출발 Button
		$('#startMenu').click(function (event) {
			event.preventDefault();
			$('#sidebar-item1-title').remove();
			$('#sidebar-item1-content').remove();
			$('#sidebar-item2-content').load('html/start_side.html');
			$('#content').load('html/start.html');
			$('#homeMenu, #meetMenu, #destMenu, #startMenu, #resultMenu, #resultCompany').removeClass('bgColor');
			$('#startMenu').addClass('bgColor');
		});
		// Header 중간여기 Button
		$('#resultMenu').click(function (event) {
			event.preventDefault();
			$('#sidebar-item1-title').remove();
			$('#sidebar-item1-content').remove();
			$('#sidebar-item2-title').remove();
			$('#sidebar-item2-content').load('html/result_side.html');
			$('#content').load('html/result_jh.html');
			$('#homeMenu, #meetMenu, #destMenu, #startMenu, #resultMenu, #resultCompany').removeClass('bgColor');
			$('#resultMenu').addClass('bgColor');
		});

		//$('#meetMenu').trigger('click');


		// Login Info, Login Form Toggle
		$('#loginSuccess').click(function () {
			console.log("login");
			$('#sideLoginInfo').toggle();
			$('#sideLoginForm').toggle();
			$('#headLoginInfo').toggle();
			$('#headLoginForm').toggle();
			$('#logout').toggle();
		});

		$(document).on('showNavbar', function () {
			$('#destMenu').show();
			$('#startMenu').show();
			$('#resultMenu').show();
		});

		$(document).on('hideNavbar', function () {
			$('#destMenu').hide();
			$('#startMenu').hide();
			$('#resultMenu').hide();
		});


		(function ($) {
			$.getQuery = function (query) {
				query = query.replace(/[\[]/, "\\\[").replace(/[\]]/,
					"\\\]");
				var expr = "[\\?&]" + query + "=([^&#]*)";
				var regex = new RegExp(expr);
				var results = regex.exec(window.location.href);
				if (results !== null) {
					return results[1];
					return decodeURIComponent(results[1]
						.replace(/\+/g, " "));
				} else {
					return false;
				}
			};
		})(jQuery);

		// Document load
		$(function () {
			var urlData = $.getQuery('meetNo');

			if (urlData !== false) {
				sessionStorage.setItem('inviteMeetNo', urlData);
				console.log("session meetNo", sessionStorage
					.getItem('inviteMeetNo'));
				$('#meetMenu').trigger('click');

				var sessionStatus = sessionStorage.getItem('sessionStatus');
				if (sessionStatus === "false") {
					$('#btnFBLogin').trigger('click');
				}
			} else {
				$('#homeMenu').trigger('click');
				//$('#menuToggle').trigger('click');
			}
		});

		// FACEBOOK Login Button
		$('#btnFBLogin').click(function () {
			Login();
		});

		// FACEBOOK Logout Button
		$('#logout').click(function () {
			console.log("logout clicked!! ");

			FB.api("/me/permissions", "DELETE", function (response) {
				console.log("delete");
				console.log(response); // gives true on app delete success
			});

			FB.logout(function () {
				document.location.reload();
			});
		});

		// $('#logout').trigger('click');

		window.fbAsyncInit = function () {

			FB.init({
				appId: FacebookAppId, // Set YOUR APP ID
				status: true, // check login status
				cookie: true, // enable cookies to allow the server to
				// access the session
				xfbml: true
					// parse XFBML
			});

			FB.Event
				.subscribe(
					'auth.authResponseChange',
					function (response) {
						if (response.status === 'connected') {
							console.log("connected to FACEBOOK");
							// SUCCESS
							getProfileInfo();
							sessionStorage.setItem('sessionStatus',
								true);

							// Parti_tb Insert
							// Login Check && MeetNo Check
							if (sessionStorage.getItem('meetNo')) {
								console.log("meetNo : " + sessionStorage
									.getItem('meetNo'));
							}

						} else if (response.status === 'not_authorized') {
							console.log("not_authorized");
							sessionStorage.setItem('sessionStatus',
								false);
						} else {
							console.log("logged out");
							sessionStorage.setItem('sessionStatus',
								false);
						}

					});

		};

		var getUserInfo = function (partiExist) {
			FB.api('/me?fields=name,email,picture,friends', function (
				response) {
				$.ajax(contextRoot + '/json/member/fbGetUser.do', {
					method: 'POST',
					dataType: 'json',
					data: {
						userId: response.id
					},
					success: function (result) {
						console.log("FACEBOOK User Info GET..!!");
						sessionStorage.setItem('member', JSON
							.stringify(result.member));
						partiExist();
						console.log(result);
					}
				});

			});
		}

		function Login() {
			console.log("MY> Login()..Excute..!!");
			FB
				.login(
					function (response) {
						if (response.authResponse) {
							getProfileInfo();
						} else {
							console
								.log('User cancelled login or did not fully authorize.');
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

		var partiExist = function () {

			var member = JSON.parse(sessionStorage.getItem('member'));
			var meetNo = sessionStorage.getItem('inviteMeetNo');

			console.log("member!!" + member);
			console.log("meetNo!!" + meetNo);

			$.ajax(contextRoot + '/json/meet/partiInsert.do', {
				method: 'POST',
				dataType: 'json',
				data: {
					membNo: member.memberNo,
					meetNo: meetNo
				},
				success: function (result) {
					console.log(result);
				}
			});
		}

		function getProfileInfo() {
			FB.api('/me?fields=name,email,picture,friends', function (
				response) {

				console.info(response);

				// Checking FB User && Update User Info
				fbUserExist(response, getUserInfo(partiExist));

				// Change User name, Profile Image
				$('#sideUserName').text(response.name);
				$('#sideUserImg').attr('src', response.picture.data.url);
				$('#headUserName').text(response.name);
				$('#headUserImg').attr('src', response.picture.data.url);

				// Login From , Login Info Toggle
				$('#sideLoginInfo').show();
				$('#headLoginInfo').show();
				$('#sideLoginForm').hide();
				$('#headLoginForm').hide();
				$('#logout').show();
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
				ref = d
				.getElementsByTagName('script')[0];
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
