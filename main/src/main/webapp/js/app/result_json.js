define(['jquery', 'handlebars', 'app/common'], function ($, handlebars) {
  return {
    init: function () {

      console.log("->result_json->init()");

      $(document).ready(function () {
          $.getJSON(contextRoot + "/json/company/list.do", function (data) {

      	  console.log(data);
          	
            var source = $('#template1').html();
            //          console.log(source);
            var template = handlebars.compile(source);
            //          console.log(template);

            var content = template(data);

            //          console.log("content : " + content);

            $('#resultJson').html(content);

          });
        });
      
      
/*      $(document).ready(function () {
        $.getJSON(contextRoot + "/json/test.json", function (data) {

    	  console.log(data);
        	
          var source = $('#template1').html();
          //          console.log(source);
          var template = handlebars.compile(source);
          //          console.log(template);

          var content = template(data);

          //          console.log("content : " + content);

          $('#resultJson').html(content);

        });
      });*/


    }
  };
});