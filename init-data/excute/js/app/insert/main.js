define(['jquery', 'app/common'], function ($) {


  return {

    init: function () {
      console.log("MY> insert/main.js Excute..!! && content load");
      //Default Load
      $('#content').load('./html/insert/table.html');

      //Table Create Button
      $('#navTBCreate').click(function (event) {
        event.preventDefault();
        $('#content').load('./html/insert/table.html');
      });

      //Data Insert Button
      $('#navDTInsert').click(function (event) {
        event.preventDefault();
        $('#content').load('./html/insert/data.html');
      });

    }
  };
});
