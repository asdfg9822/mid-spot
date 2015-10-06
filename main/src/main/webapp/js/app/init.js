define(['jquery', 'bootstrap', 'app/common'], function ($) {

	$("#menuToggle").click(function (e) {
		e.preventDefault();
		console.log("mesnuToggle");
		$("#wrapper").toggleClass("toggled");
	});

});
