define(['jquery', 'handlebars', 'datatables', 'app/common'], function ($, handlebars) {



  return {

    init: function () {
      console.log("MY> view/main.js Excute..!! && content load");

      //Default Load
      //$('#content').load('./html/view/main.html');

      var funcObj = this;

      $(document).on('click', '.btnTableSelect', function () {
        funcObj.selectTable($(this).attr('id'));
      });

      var source = $('#tableViewScript').html();
      window.template = handlebars.compile(source);

    },
    selectTable: function (tbName) {

      var funcObj = this;

      $.getJSON(contextRoot + '/table/select.do', {
          name: tbName
        },
        function (result) {
          $('#contentWrap').empty();

          if (result.result.length == 0) {
            console.log("ok");
            $('<span>').text('Table이 비어있습니다.').css('margin-top', '10%').appendTo('#contentWrap');
          } else {

            var content = window.template(result);
            $('#contentWrap').html(content);


            //Table add ordering
            $(document).ready(function () {
              $('#tableView').DataTable({
                "scrollX": true
              });
            });
          }
        });
    }
  };
});
