define(['jquery'], function ($) {


  return {

    init: function () {
      console.log("MY> home.js Excute..!! && Trigger navIntro");
      //Default Load
      $('#content').load('./html/home/intro.html');

      //project intro click
      $('#navIntro').click(function (event) {
        event.preventDefault();
        $('#content').load('./html/home/intro.html');
      });

      //team intro click
      $('#navTeam').click(function (event) {
        event.preventDefault();
        $('#content').load('./html/home/team.html');
      });

      //DB Modelling image
      $('#navModel').click(function (event) {
        event.preventDefault();
        $('#content').load('./html/home/model.html');
      });

      //Contact Page
      $('#navContact').click(function (event) {
        event.preventDefault();
        $('#content').load('./html/home/contact.html');
      });


    }
  };

});
