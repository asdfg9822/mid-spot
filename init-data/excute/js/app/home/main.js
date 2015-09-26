define(['jquery', 'app/common'], function ($) {


  return {

    init: function () {
      console.log("MY> home.js Excute..!! && Trigger navIntro");
      //Default Load
      $('#content').load('./html/home/intro.html');

      $('#navIntro').click(function (event) {
        event.preventDefault();
        $('#content').load('./html/home/intro.html');
      });

      $('#navTeam').click(function (event) {
        event.preventDefault();
        $('#content').load('./html/home/team.html');
      });

      $('#navModel').click(function (event) {
        event.preventDefault();
        $('#content').load('./html/home/model.html');
      });

      $('#navContact').click(function (event) {
        event.preventDefault();
        $('#content').load('./html/home/contact.html');
      });


    }
  };

});