define(['jquery', 'handlebars', 'app/cbpFWTabs', 'slider', 'app/common'], function ($, handlebars) {
  return {
    init: function () {

      console.log("->result_json->init()");


      /*----------- handlebars 함수 ------------*/
      handlebars.registerHelper('list', function (options) {

        var out = "";

        if (options == 3) {
          out = "walk<img src='images/result/walk.png' style='width:20px;'>";
        } else if (options == 2) {
          out = "bus<img src='images/result/bus.png' style='width:20px;'>";
        } else {
          out = "subway<img src='images/result/subway.png' style='width:20px;'>";
        }

        return out;
      });

      handlebars.registerHelper('list2', function (options) {

        var value = options;

        value = value.replace(/&gt;/g, "");
        value = value.replace(/&lt;/g, "");


        return value;
      });

      handlebars.registerHelper('list3', function (options) {

        var out = "";

        if (options == 3) {
          out = "walk<img src='images/result/walk.png' style='width:20px;'>";
        } else if (options == 2) {
          out = "bus<img src='images/result/bus.png' style='width:20px;'>";
        } else {
          out = "subway<img src='images/result/subway.png' style='width:20px;'>";
        }

        return out;
      });

      /*----------- END handlebars 함수 ------------*/

      var moduleObj = this;
      //Default Load


      $('#tabs').on('click', '.btnCate', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var section = $($(this).attr('data-section'));
        section.find('.result_table_border_area').empty();
        moduleObj.listCompany(0, 10, section);
      });

      $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var documentTop = $(document).height() - $(window).height();
        if (scrollTop - 1 <= documentTop && documentTop < scrollTop + 1) {
          var section = $($('.tab-current a').attr('data-section'));
          moduleObj.listCompany($('.result_table_border_area > div').length, 5, section);
        }
      });

      //Like Button Click Event
      $('#tabs').on('click', '.comp_like_btn', function (event) {
        event.preventDefault();
        var currBtn = $(this);
        moduleObj.like(currBtn);
      });


      /*----------- 추천장소 ------------*/
      $(document).ready(function () {

        $(document).on('click', '.result_map_menu> #pickSection-0', function (event) {
            event.preventDefault();
            $.getJSON(contextRoot + "/json/pick/get.do", {
              pick: $(this).attr('data-rcmdPlc'),
              eX: $(this).attr('data-lon'),
              eY: $(this).attr('data-lat')

            }, function (result) {

              $('.result_pick').html(result.date);
            });
          }),
          $(document).on('click', '.result_map_menu> #pickSection-1', function (event) {
            event.preventDefault();
            $.getJSON(contextRoot + "/json/pick/get.do", {
              pick: $(this).attr('data-rcmdPlc'),
              eX: $(this).attr('data-lon'),
              eY: $(this).attr('data-lat')

            }, function (result) {

              console.log(result);
              $('.result_pick').html(result.date);
            });
          });
        $(document).on('click', '.result_map_menu> #pickSection-2', function (event) {
          event.preventDefault();
          $.getJSON(contextRoot + "/json/pick/get.do", {
            pick: $(this).attr('data-rcmdPlc'),
            eX: $(this).attr('data-lon'),
            eY: $(this).attr('data-lat')

          }, function (result) {
            console.log(result);

            $('.result_pick').html(result.date);
          });
        });
      });
      /*----------- End 추천장소 ------------*/


      /*----------- tab cate handlebars ------------*/
      $(document).ready(function () {

        var meetNo = JSON.parse(sessionStorage.getItem('meetNo'));
        var moduleObj = this;

        $.getJSON(contextRoot + "/json/cate/list.do", {
          meetNo: meetNo
        }, function (result) {

          console.log("test---------");
          console.log(result);

          var source = $('#resultCateTitleScript').html();
          var template = handlebars.compile(source);
          var content = template(result);

          var source2 = $('#resultCateSectionScript').html();
          var template2 = handlebars.compile(source2);
          var content2 = template2(result);

          $('#cateNameArea').html(content);
          $('#cateSectionArea').html(content2);

          new CBPFWTabs(document.getElementById('tabs'));

          $('#tabs .btnCate:first').off('click').trigger('click');

        });
      });
      /*----------- End tab cate handlebars ------------*/

      /*------------Click Event------------*/
      $(document).ready(function () {

        // 더보기
        $(document).on('click', ".ca-menu > .detail-info", function (event) {

            event.preventDefault();
            var slideFind = $(this).parents().children(".detail-explain-find");
            var slideShare = $(this).parents().children(".detail-explain-share");
            var slideMore = $(this).parents().children(".detail-explain-more");
            slideFind.slideUp();
            slideShare.slideUp();
            slideMore.slideToggle("slow");

          }),
          // 길찾기
          $(document).on('click', ".ca-menu > .detail-find", function (event) {
            event.preventDefault();
            var slideFind = $(this).parents().children(".detail-explain-find");
            var slideShare = $(this).parents().children(".detail-explain-share");
            var slideMore = $(this).parents().children(".detail-explain-more");
            slideShare.slideUp();
            slideMore.slideUp();
            slideFind.slideToggle("slow");
          }),
          // 공유하기
          $(document).on('click', ".ca-menu > .detail-share", function (event) {
            event.preventDefault();
            var slideFind = $(this).parents().children(".detail-explain-find");
            var slideShare = $(this).parents().children(".detail-explain-share");
            var slideMore = $(this).parents().children(".detail-explain-more");
            slideFind.slideUp();
            slideMore.slideUp();
            slideShare.slideToggle("slow");
          });
      });
      /*------------END Click Event------------*/


      /*------------더보기 Map Event ------------*/

      $(document).ready(function () {
        $(document).on('click', '.ca-menu > .detail-info', function () {
          var thisArea = $(this).parents('.result_table_border_area_2');
          var detailMap = thisArea.find('.detail_map');

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
      /*------------ END 더보기 Map Event ------------*/


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
      /*------------ END 길찾기 Map Event ------------*/


      /*----------- 길찾기 handlebars ------------*/
      $(document).on('click', '.ca-menu  > .detail-find', function () {

        var member = JSON.parse(sessionStorage.getItem('member'));
        var meetNo = JSON.parse(sessionStorage.getItem('meetNo'));

        $.getJSON(contextRoot + "/json/company/pubTrans.do", {
          eX: $(this).attr('data-lon'),
          eY: $(this).attr('data-lat'),
          membNo: member.memberNo,
          partiNo: meetNo
        }, function (data) {

          var obj = JSON && JSON.parse(data.result) || $.parseJSON(data.result);

          //console.log(obj);

          var source = $('#resultRoadContentScript').html();

          var template = handlebars.compile(source);

          console.log(data);
          var content = template(obj.result.path[0]);

          $('.result_road_Content').html(content);

        });

      });
      /*----------- End 길찾기 handlebars ------------*/


      /*----------- 더보기 SPEC handlebars ------------*/
      $(document).on('click', '.ca-menu  > .detail-info', function () {

        $.getJSON(contextRoot + "/json/dest/specList.do", {

          compNo: $(this).attr('data-compNo')

        }, function (result) {

          console.log(result);

          var source = $('#resultSpecContentScript').html();

          var template = handlebars.compile(source);

          var content = template(result);

          $('.result_spec_Content').html(content);

        });

      });
      /*----------- End 더보기 handlebars ------------*/


    }, // End of init()
    listCompany: function (currCnt, listCnt, section) {

      $(document).ready(function () {

        var member = JSON.parse(sessionStorage.getItem('member'));
        var meetNo = JSON.parse(sessionStorage.getItem('meetNo'));

        console.log("meetNo----------------");
        console.log(meetNo);
        console.log(member);
        $.ajax(contextRoot + '/json/company/list.do', {
          method: 'POST',
          dataType: 'json',
          data: {
            membNo: member.memberNo,
            partiNo: meetNo,
            cateNo: section.attr('data-cate-no'),
            currCnt: currCnt,
            listCnt: listCnt
          },
          success: function (result) {
            /*----------- handlebars : Content ------------*/
            var source = $('#resultContentScript').html();
            var template = handlebars.compile(source);
            var content = template(result);
            //load가 아님 append

            console.log(result);

            section.find('.result_table_border_area').append(content);
            $('.like_img[data-isLike=' + 1 + ']').attr('src', '. /images/result/like_img.png');

            /*----------- handlebars : Sidebar ------------*/
            source = $('#resultSideScript').html();
            template = handlebars.compile(source);
            content = template(result);
            $('#resultSideArea').html(content);



            /*----------- Sidebar Marker Control------------*/

            sideMapControl(result);

            function sideMapControl(result) {

              var mapContainer = document.getElementById('stationMap'), // 지도를 표시할 div
                mapOption = {
                  center: new daum.maps.LatLng(37.497941, 127.027609), // 지도의 중심좌표
                  level: 8 // 지도의 확대 레벨
                };

              var map = new daum.maps.Map(mapContainer, mapOption);

              // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
              var bounds = new daum.maps.LatLngBounds();
              var markerList = new Array();
              var infowindowList = new Array();

              for (var index = 0; index < result.length; index++) {

                var imageSrc = "images/Marker.png";

                var imageSize = new daum.maps.Size(24, 35);

                // 마커 이미지를 생성합니다
                var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);


                // 마커를 생성합니다
                var marker = new daum.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  clickable: true,
                  position: new daum.maps.LatLng(result.data[index].lat, result.data[index].lon), // 마커를 표시할 위치
                  title: result.data[index].companyName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                  image: markerImage // 마커 이미지
                });
                markerList.push(marker);

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new daum.maps.InfoWindow({
                  content: '<div style="padding:5px;">' + result.data[index].companyName + '</div>', // 인포윈도우에 표시될 내용입니다
                  removable: true
                });

                infowindowList.push(infowindow);

                //                infowindow.open(map, marker);


                bounds.extend(new daum.maps.LatLng(result.data[index].lat, result.data[index].lon));

              } //for 문 인원수 별로

              map.setBounds(bounds); // 지도에 마커의 위치만큼 표시
            }

            /*----------- END Sidebar Marker Control------------*/


            /*----------- 추천장소 handlebars ------------*/
            var meetNo = JSON.parse(sessionStorage.getItem('meetNo'));

            $.getJSON(contextRoot + "/json/pick/list.do", {
              meetNo: meetNo
            }, function (result) {

              var source = $('#resultPickContentScript').html();
              var template = handlebars.compile(source);
              var content = template(result);

              console.log(result);

              $('.pick_name').html(content);

              // 지도버튼 첫번째 강제 클릭부분
              $('.button_map_first:first').off('click').trigger('click');

            });
            /*----------- End 추천장소 handlebars ------------*/

          }
        });
      });
    },
    like: function (currBtn) {

      var member = JSON.parse(sessionStorage.getItem('member'));
      var meetNo = JSON.parse(sessionStorage.getItem('meetNo'));

      $.getJSON(contextRoot + "/json/company/likeUp.do", {
          compNo: currBtn.attr('data-no'),
          membNo: member.memberNo,
          partiNo: meetNo
        },
        function (result) {

          console.log(result);

          if (result.like == "off") {
            currBtn.find('img').attr('src', './images/result/like_img_off1.png');
          } else {
            currBtn.find('img').attr('src', './images/result/like_img.png');
          }
          currBtn.find('span').text(result.likeCnt);
        });
    }
  };
});