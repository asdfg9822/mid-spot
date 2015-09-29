var mysql = require('mysql'); //Mysql Module
var express = require('express'); //Express Framework Module
var fs = require('fs'); //HTML Load Module
var router = express.Router(); //URL Routing Module

//DB Connection 
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: 3306,
  user: 'java72',
  password: 'java72',
  database: 'midspot'
});

router.all('/insert.do', function (request, response) {

  //Cross Origin Resource Sharing Allow
  response.writeHeader(200, {
    "Content-Type": "Application/json",
    "Access-Control-Allow-Origin": "*"
  });

  var data = request.query;

  for (var i = 0; i < data.places.length; i++) {
    companyInfoInsert(data.places[i]);
  }

  function companyInfoInsert(place) {

    //console.log(place);
    pool.query(
      'insert into comp_tb(kakao_no,comp_nm,admin_tel,comp_tel,elev_bl,ground_bl,web_bl,web_addr,open_dt,close_dt,post_no,addr_no,addr_old,addr_new,lon,lat)' + ' values (?,?,?,?,?,?,?,?,now(),now(),?,?,?,?,?,?);', [place.id, place.title, place.phone, place.phone, 1, 1, 1, "HomePage.com", null, null, place.address, place.newAddress, place.longitude, place.latitude],
      function (err, rows) {
        if (err) {
          console.log(err);
        } else {
          getCompanyNoByKakaoNo(place.id, function (companyNo) {
            if (place.imageUrl.trim() != "") {
              companyImageInsert(companyNo, place.imageUrl);
            }
          });
          cateInsert(place);
        }
      });
  }

  function companyImageInsert(comp_no, imageUrl) {
    console.log("companyImageInsert() Info --> comp_no : " + comp_no + " imageUrl :" + imageUrl);
    pool.query(
      'insert into comp_img_tb(comp_no,img_path) values (?,?);', [comp_no, imageUrl],
      function (err, rows) {
        if (err) {
          console.log("companyImageInsert() fail --> " + err);
        } else {
          console.log("companyImageInsert() --> comp_no : " + comp_no + " imageUrl :" + imageUrl);
        }
      });
  }

  var getCompanyNoByKakaoNo = function (kakaoNo, callback) {
    var data;
    if (typeof callback === "function") {
      pool.query(
        'select comp_no from comp_tb where kakao_no=?;', [kakaoNo],
        function (err, rows) {
          if (err) {
            console.log(err);
          }
          callback(rows[0].comp_no);
        });
    }
  };


  function cateInsert(place) {
    var categoryArr = place.category.split(">");
    for (var i = 0; i < categoryArr.length; i++) {
      var category = categoryArr[i].trim();
      console.log("==>cateInsert()==>category : " + category);
      pool.query(
          'insert into cate_tb(cate_nm,cate_dp) values (?,?);', [category, i + 1],
          function (err, rows) {
            if (err) {
              console.log(err);
            }
          }),
        pool.query(
          'select cate_no from cate_tb where cate_nm=?', [category],
          function (err, rows) {
            if (err) {
              console.log(err);
            } else if (rows[0]) {
              getCompanyNoByKakaoNo(place.id, function (companyNo) {
                console.log(rows[0].cate_no);
                console.log("cateInsert() --> companyNo: " + companyNo);
                compCateInsert(companyNo, rows[0].cate_no);
              });
            }
          });
    }
  }


  function compCateInsert(companyNo, categoryNo) {
    pool.query(
      'insert into comp_cate_tb(comp_no,cate_no) values (?,?);', [companyNo, categoryNo],
      function (err, rows) {
        if (err) {
          console.log(err);
        }
      });
  }

  var jsonData = JSON.stringify({
    success: "true"
  });
  response.write(jsonData);
  response.end();
});

module.exports = router;
