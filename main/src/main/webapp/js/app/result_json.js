define(['jquery', 'handlebars', 'slider', 'app/common'], function ($, handlebars) {
  return {
    init: function () {

        console.log("->result_json->init()");

        /*------------Click Event------------*/
        $(document).ready(function () {
          $(document).on('click', ".ca-menu > .detail-info", function () {
              var slideFind = $(this).parents().children(".detail-explain-find");
              var slideShare = $(this).parents().children(".detail-explain-share");
              var slideMore = $(this).parents().children(".detail-explain-more");
              slideFind.slideUp();
              slideShare.slideUp();
              slideMore.slideToggle("slow");
            }),
            $(document).on('click', ".ca-menu > .detail-find", function () {
              var slideFind = $(this).parents().children(".detail-explain-find");
              var slideShare = $(this).parents().children(".detail-explain-share");
              var slideMore = $(this).parents().children(".detail-explain-more");
              slideShare.slideUp();
              slideMore.slideUp();
              slideFind.slideToggle("slow");
            }),
            $(document).on('click', ".ca-menu > .detail-share", function () {
              var slideFind = $(this).parents().children(".detail-explain-find");
              var slideShare = $(this).parents().children(".detail-explain-share");
              var slideMore = $(this).parents().children(".detail-explain-more");
              slideFind.slideUp();
              slideMore.slideUp();
              slideShare.slideToggle("slow");
            });
        });

        /*------------더 보기 Map Event ------------*/

        $(document).ready(function () {
          $(document).on('click', '.ca-menu > .detail-info', function () {
            var thisArea = $(this).parents('.result_table_border_area_2');
            var detailMap = thisArea.find('.detail_map');

            //$('<div>').attr('id', 'detail_map_id').css('width', '100%').css('height', '100%').appendTo(detailMap);

            var mapContainer = document.getElementById(detailMap.attr('id'));
            var mapOption = {
              center: new daum.maps.LatLng(detailMap.attr('data-lat'), detailMap.attr('data-lon')),
              level: 5
            };
            var map = new daum.maps.Map(mapContainer, mapOption);

            var marker = new daum.maps.Marker({
              // 지도 중심좌표에 마커를 생성합니다
              position: map.getCenter()
            });
            // 지도에 마커를 표시합니다
            marker.setMap(map);

          });
        });


        /*------------길찾기 Map Event ------------*/
        $(document).ready(function () {
          $(document).on('click', '.ca-menu  > .detail-find', function () {
            var thisArea = $(this).parents('.result_table_border_area_2');
            var detailMap = thisArea.find('.detail_road');

            //$('<div>').attr('id', 'detail_map_id').css('width', '100%').css('height', '100%').appendTo(detailMap);

            var mapContainer = document.getElementById(detailMap.attr('id'));
            var mapOption = {
              center: new daum.maps.LatLng(detailMap.attr('data-lat'), detailMap.attr('data-lon')),
              level: 5
            };
            var map = new daum.maps.Map(mapContainer, mapOption);


            var imageSrc = "http://i1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_drag.png";
            //http://127.0.0.1:9999/main/images/marker/marker_1.png
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new daum.maps.Size(30, 44);

            // 마커 이미지를 생성합니다
            var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new daum.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: new daum.maps.LatLng(detailMap.attr('data-lat'), detailMap.attr('data-lon')),
              // 마커를 표시할 위치
              image: markerImage // 마커 이미지
            });

            //            var startSrc = "http://i1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png";
            //
            //            var startSize = new daum.maps.Size(30, 44);
            //
            //            // 마커 이미지를 생성합니다
            //            var startImage = new daum.maps.MarkerImage(startSrc, startSize);
            //
            //            // 마커를 생성합니다
            //            var startMarker = new daum.maps.Marker({
            //              map: map, // 마커를 표시할 지도
            //              position: new daum.maps.LatLng(detailMap.attr('data-lat'), detailMap.attr('data-lon')),
            //              image: startImage // 마커 이미지
            //            });
            // 지도에 마커를 표시합니다
            marker.setMap(map);

          });
        });

        /*----------- click img ------------*/
        //        $(document).ready(function () {
        //
        //          $(document).on('click', '.img_next', function () {
        //
        //            var currDiv = $(this).parents('.result_table_border');
        //
        //            currDiv.find('.active').removeClass('active').addClass('oldActive'); //켜진걸 끄고 , oldactive
        //            if (currDiv.find('.oldActive').is(':last-child')) {
        //              currDiv.find('.img_slider').first().addClass('active'); //첫번 째로 바꾼다
        //            } else { //아니면
        //              currDiv.find('.oldActive').next().addClass('active'); //다음 차례로 넘어간다.
        //            }
        //            currDiv.find('.img_slider').fadeOut(); //다끄고
        //            currDiv.find('.oldActive').removeClass('oldActive'); //올드 액티브를 지우고
        //            currDiv.find('.active').fadeIn(); //하나 키고
        //          });
        //
        //          $(document).on('click', '.img_prev', function () {
        //
        //            var currPrev = $(this).parents('.result_table_border');
        //
        //            currPrev.find('.active').removeClass('active').addClass('oldActive');
        //            if (currPrev.find('.oldActive').is(':first-child')) {
        //              currPrev.find('.img_slider').last().addClass('active');
        //            } else {
        //              currPrev.find('.oldActive').prev().addClass('active');
        //            }
        //            currPrev.find('.img_slider').fadeOut();
        //            currPrev.find('.oldActive').removeClass('oldActive');
        //            currPrev.find('.active').fadeIn();
        //          });
        //
        //        });
        /*------------End of Event------------*/

        $(document).ready(function () {
          $.getJSON(contextRoot + "/json/company/list.do", function (result) {

            /*----------- handlebars : Content ------------*/
            var source = $('#resultContentScript').html();
            var template = handlebars.compile(source);
            var content = template(result);
            $('#section-1').html(content);

//            console.log("cjh");
 //            console.log(content);

            /*----------- Content Img Control------------*/
//            var firstChild = $('.result_table_border_area .slideshow .first').addClass('active');
  //            $('.img_slider').hide();
  //            $('.active').show();


            /*----------- handlebars : Sidebar ------------*/
            /*source = $('#resultSideScript').html();
template = handlebars.compile(source);
content = template(result);
$('#resultSideArea').html(content);*/

            /*----------- Sidebar Marker Control------------*/
            //sideMapControl(result);

          });

        });


        $(document).on('click', '.ca-menu  > .detail-find', function () {

          /*----------- 길찾기 handlebars ------------*/
          $.getJSON(contextRoot + "/json/company/pubTrans.do", function (data) {

            var obj = JSON && JSON.parse(data.result) || $.parseJSON(data.result);

            //console.log(obj);

            var source = $('#resultRoadContentScript').html();

            var template = handlebars.compile(source);

            var content = template(obj.result.path[0]);
            // console.log("content : " + content);

            $('.result_road_Content').html(content);

          });
          /*----------- End 길찾기 handlebars ------------*/

        });


        function sideMapControl(result) {
          var mapContainer = document.getElementById('stationMap'), // 지도를 표시할 div
            mapOption = {
              center: new daum.maps.LatLng(37.497941, 127.027609), // 지도의 중심좌표
              level: 8 // 지도의 확대 레벨
            };

          // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
          var map = new daum.maps.Map(mapContainer, mapOption);

          // 마커 이미지의 이미지 주소입니다


          for (var i = 0; i < result.length; i++) {

            //var imageSrc = contextRoot + "/images/marker/marker_" + (i + 1) + ".png";
            var imageSrc = "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Ball-Azure-icon.png";
            //http://127.0.0.1:9999/main/images/marker/marker_1.png
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new daum.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new daum.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: new daum.maps.LatLng(result.data[i].lat, result.data[i].lon), // 마커를 표시할 위치
              title: result.data[i].companyName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              image: markerImage // 마커 이미지
            });

            $.extend(marker, {
              'section': i
            });

            //$('img[useMap]').css('background-color', 'red');

            daum.maps.event.addListener(marker, 'click', function () {
              var thisSection = $('.result_table_border_area_2[data-section=' + this.section + ']');
              slideContent('section-' + this.section, -1, 3);
            });
          }
        }

      } // End of init()
  };
});
