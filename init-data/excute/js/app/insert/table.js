define(['jquery', 'app/common'], function ($) {

  console.log('insert/table.js excute..!!');

  return {
    init: function () {

      //다른 function에 접근하기 위한 객체
      var funcObj = this;

      //Default Exist Table Load
      funcObj.showTable();

      //Table Create Button Click Event
      $('#btnTBCreate').click(function (event) {
        event.preventDefault();
        console.log('Table을 생성합니다.');
        funcObj.createTable();
      });

      //Table Delete Button Click Event
      $('#btnTBDelete').click(function (event) {
        console.log('Table을 삭제합니다.');
        funcObj.deleteTable();
      });

      //Table Init Button Click Evenet (created after the deletion)
      $('#btnTBInit').click(function (event) {
        console.log('Table을 생성 & 삭제합니다.');
        funcObj.deleteTable();
        funcObj.createTable();
      });

    },
    //Table Create Ajax
    createTable: function () {
      console.log('createTable().. Excute');

      var funcObj = this;

      $.getJSON(contextRoot + "/table/create.do",
        function (result) {
          console.log("/table/create.do result");
          console.log(result);

          funcObj.importTableContent(result);
        });

    },
    //Table Delete Ajax
    deleteTable: function () {
      console.log('deleteTable().. Excute');

      var funcObj = this;

      $.getJSON(contextRoot + "/table/delete.do",
        function (result) {
          console.log("/table/create.do result");
          console.log(result);

          funcObj.importTableContent(result);
        });
    },
    //Function Call in return obj
    initTable: function () {
      console.log('initTable().. Excute');

      var funcObj = this;

      funcObj.createTable();
      funcObj.deleteTable();
    },
    importTableContent: function (data) {
      console.log('importTableContent.. Excute');

      if (data.result == "success") {

        $('#tableArea').empty();
        for (var t in data.tables) {
          //$('#tableArea').text();
          $('<div>').text(data.tables[t]).appendTo('#tableArea');
        }

      } else {
        $('#tableArea').text('Error 발생, Database를 확인해주세요.');
      }

    },
    showTable: function () {

      var funcObj = this;

      $.getJSON(contextRoot + "/table/show.do",
        function (result) {
          console.log("/table/show.do result");
          console.log(result);

          funcObj.importTableContent(result);
        });
    }
  };
});
