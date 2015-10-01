//  js/app : Mid-Spot JS
//  lib/app : 외부 Library

requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery': 'lib/jquery-1.11.3.min',
    'bootstrap': 'lib/bootstrap.min',
    'handlebars': 'lib/handlebars-v3.0.3',
    'classie': 'lib/classie',
    'snap': 'lib/snap.svg-min',
    'modernizr': 'lib/modernize.custom.63321',
    'datatables': 'lib/jquery.dataTables.min',
    'async': 'lib/async'
  },
  shim: {
    "datatables": {
      "deps": ['jquery']
    }
  }


});


// index.html을 위한 자바스크립트 로딩
requirejs(['app/init']);
