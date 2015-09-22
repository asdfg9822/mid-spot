define(['jquery', 'handlebars', 'app/common'], function ($, handlebars) {
  return {
    init: function () {

      console.log("->result_json->init()");

      /*------------Click Event------------*/
      $(document).ready(function () {
        $(document).on('click', ".select-button > .detail-info", function () {
            var slideFind = $(this).parents().children(".detail-explain-find");
            var slideShare = $(this).parents().children(".detail-explain-share");
            var slideMore = $(this).parents().children(".detail-explain-more");
            slideFind.slideUp();
            slideMore.slideToggle("slow");
          }),
          $(document).on('click', ".select-button > .detail-find", function () {
            var slideFind = $(this).parents().children(".detail-explain-find");
            var slideShare = $(this).parents().children(".detail-explain-share");
            var slideMore = $(this).parents().children(".detail-explain-more");
            slideShare.slideUp();
            slideMore.slideUp();
            slideFind.slideToggle("slow");
          }),
          $(document).on('click', ".select-button > .detail-share", function () {
            var slideFind = $(this).parents().children(".detail-explain-find");
            var slideShare = $(this).parents().children(".detail-explain-share");
            var slideMore = $(this).parents().children(".detail-explain-more");
            slideFind.slideUp();
            slideMore.slideUp();
            slideShare.slideToggle("slow");
          });

      });

      
      /*----------- click img ------------*/
      $(document).ready(function () {

        $(document).on('click', '.img_next', function () {

          var currDiv = $(this).parents('.result_table_border');

          currDiv.find('.active').removeClass('active').addClass('oldActive'); //켜진걸 끄고 , oldactive
          if (currDiv.find('.oldActive').is(':last-child')) {
            currDiv.find('.img_slider').first().addClass('active'); //첫번 째로 바꾼다 
          } else { //아니면
            currDiv.find('.oldActive').next().addClass('active'); //다음 차례로 넘어간다. 
          }
          currDiv.find('.img_slider').fadeOut(); //다끄고
          currDiv.find('.oldActive').removeClass('oldActive'); //올드 액티브를 지우고
          currDiv.find('.active').fadeIn(); //하나 키고
        });

        $(document).on('click', '.img_prev', function () {

          var currPrev = $(this).parents('.result_table_border');

          currPrev.find('.active').removeClass('active').addClass('oldActive');
          if (currPrev.find('.oldActive').is(':first-child')) {
            currPrev.find('.img_slider').last().addClass('active');
          } else {
            currPrev.find('.oldActive').prev().addClass('active');
          }
          currPrev.find('.img_slider').fadeOut();
          currPrev.find('.oldActive').removeClass('oldActive');
          currPrev.find('.active').fadeIn();
        });

      });
      /*------------End of Event------------*/

      $(document).ready(function () {
        $.getJSON(contextRoot + "/json/company/list.do", function (data) {

          var source = $('#template1').html();
          //          console.log(source);
          var template = handlebars.compile(source);
          //          console.log(template);

          var content = template(data);

          //          console.log("content : " + content);

          $('#resultJson').html(content);
          

          /*----------- first img------------*/
          var firstChild = $('.result_table_border_area .slideshow .first').addClass('active');
          $('.img_slider').hide();
          $('.active').show();
          /*------------End first img------------*/
          
          /*-- map --*/
          var mapContainer = document.getElementById('.detail_map'),
          mapOption = { 
        	  center: new daum.maps.LatLng(33.450701, 126.570667), 
        	  level: 3 
          };
          var map = new daum.maps.Map(mapContainer, mapOption);  
          
          
          /*-- End map --*/

        });
      });


    }
  };
});