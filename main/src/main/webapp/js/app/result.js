define(['jquery', 'app/common', 'nd_slider'], function ($) {
  return {
    init: function () {

      console.log("->result->init()");

      $('.map-click').click(function (event) {
        event.preventDefault();
        $('.seek-right').load('/mid-spot/html/result_seek.html');
        //    $('.mapchange').load('#shopMap1');
      });

      try {
        document.execCommand('BackgroundImageCache', false, true);
      } catch (e) {}

      console.log('->result->init()');

      require(['http://openapi.map.naver.com/openapi/naverMap.naver?ver=2.0&key=' + navaerMapKey], function () {
        console.log("naver map ok");
        var oCenterPoint = new nhn.api.map.LatLng(37.5010226, 127.0396037);
        nhn.api.map.setDefaultPoint('LatLng');
        var oCenterPoint = new nhn.api.map.LatLng(37.5010226, 127.0396037);
        nhn.api.map.setDefaultPoint('LatLng');
        oMap = new nhn.api.map.Map('testMap', {
          point: oCenterPoint,
          zoom: 8, // - 초기 줌 레벨은 10으로 둔다.
          enableWheelZoom: true,
          enableDragPan: true,
          enableDblClickZoom: false,
          mapMode: 0,
          activateTrafficMap: false,
          activateBicycleMap: false,
          minMaxLevel: [1, 14],
          size: new nhn.api.map.Size(250, 250)
        });

        oMap = new nhn.api.map.Map('testMap2', {
          point: oCenterPoint,
          zoom: 8, // - 초기 줌 레벨은 10으로 둔다.
          enableWheelZoom: true,
          enableDragPan: true,
          enableDblClickZoom: false,
          mapMode: 0,
          activateTrafficMap: false,
          activateBicycleMap: false,
          minMaxLevel: [1, 14],
          size: new nhn.api.map.Size(250, 250)
        });

        oMap = new nhn.api.map.Map('testMap3', {
          point: oCenterPoint,
          zoom: 8, // - 초기 줌 레벨은 10으로 둔다.
          enableWheelZoom: true,
          enableDragPan: true,
          enableDblClickZoom: false,
          mapMode: 0,
          activateTrafficMap: false,
          activateBicycleMap: false,
          minMaxLevel: [1, 14],
          size: new nhn.api.map.Size(250, 250)
        });

        oMap = new nhn.api.map.Map('testMap4', {
          point: oCenterPoint,
          zoom: 8, // - 초기 줌 레벨은 10으로 둔다.
          enableWheelZoom: true,
          enableDragPan: true,
          enableDblClickZoom: false,
          mapMode: 0,
          activateTrafficMap: false,
          activateBicycleMap: false,
          minMaxLevel: [1, 14],
          size: new nhn.api.map.Size(250, 250)
        });

        oMap = new nhn.api.map.Map('testMap5', {
          point: oCenterPoint,
          zoom: 8, // - 초기 줌 레벨은 10으로 둔다.
          enableWheelZoom: true,
          enableDragPan: true,
          enableDblClickZoom: false,
          mapMode: 0,
          activateTrafficMap: false,
          activateBicycleMap: false,
          minMaxLevel: [1, 14],
          size: new nhn.api.map.Size(250, 250)
        });

        oMap = new nhn.api.map.Map('testMap6', {
          point: oCenterPoint,
          zoom: 8, // - 초기 줌 레벨은 10으로 둔다.
          enableWheelZoom: true,
          enableDragPan: true,
          enableDblClickZoom: false,
          mapMode: 0,
          activateTrafficMap: false,
          activateBicycleMap: false,
          minMaxLevel: [1, 14],
          size: new nhn.api.map.Size(250, 250)
        });

      }, function (err) {
        console.log("naver map error");
        //throw err; // maybe freak out a little?
      });
    }
  };
});

$(function(){
	$('.m-btn').css('font-size', '15px')
});

$(document).ready(function () {
    $(this).children(
      $(".select-button > .detail-info").click(function () {
        var slideFind = $(this).parent().parent().parent().children(".detail-explain-find");
        var slideShare = $(this).parent().parent().parent().children(".detail-explain-share");
        var slideMore = $(this).parent().parent().parent().children(".detail-explain-more");
        slideFind.slideUp();
        slideShare.slideUp();
        slideMore.slideToggle("slow");
      }),
      $(".select-button > .detail-find").click(function () {
      	var slideFind = $(this).parent().parent().parent().children(".detail-explain-find");
        var slideShare = $(this).parent().parent().parent().children(".detail-explain-share");
        var slideMore = $(this).parent().parent().parent().children(".detail-explain-more");
      	slideShare.slideUp();
      	slideMore.slideUp();
      	slideFind.slideToggle("slow");
      }),
      $(".select-button > .detail-share").click(function () {
      	var slideFind = $(this).parent().parent().parent().children(".detail-explain-find");
        var slideShare = $(this).parent().parent().parent().children(".detail-explain-share");
        var slideMore = $(this).parent().parent().parent().children(".detail-explain-more");
      	slideFind.slideUp();
      	slideMore.slideUp();
      	slideShare.slideToggle("slow");
      })
    );
  });	