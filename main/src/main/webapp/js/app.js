/*
 * requirejs 라이브러리의 환경 설정
 */

/*
 * baseUrl: 라이브러리를 찾는 기본 디렉토리
 * paths: 기본 디렉토리 외에 다른 디렉토리의 별명 설정 
 */
requirejs.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'lib/jquery-1.11.3',
		'bootstrap': 'lib/bootstrap.min',
		'handlebars': 'lib/handlebars-v3.0.3',
		'jquery.ui.widget': 'lib/vendor/jquery.ui.widget',
		'load-image.all': 'lib/load-image.all.min',
		'load-image': 'lib/load-image',
		'load-image-ios': 'lib/load-image-ios',
		'load-image-orientation': 'lib/load-image-orientation',
		'load-image-meta': 'lib/load-image-meta',
		'load-image-exif': 'lib/load-image-exif',
		'load-image-exif-map': 'lib/load-image-exif-map',
		'canvas-to-blob': 'lib/canvas-to-blob.min',
		'jquery.iframe-transport': 'lib/jquery.iframe-transport',
		'jquery.fileupload': 'lib/jquery.fileupload',
		'jquery.fileupload-process': 'lib/jquery.fileupload-process',
		'jquery.fileupload-image': 'lib/jquery.fileupload-image',
		'jquery.fileupload-audio': 'lib/jquery.fileupload-audio',
		'jquery.fileupload-video': 'lib/jquery.fileupload-video',
		'jquery.fileupload-validate': 'lib/jquery.fileupload-validate',
		'bootstrap': 'lib/bootstrap.min',
		'jquery-ui': 'lib/jquery-ui',
		'nd_slider': 'lib/nd_slider',
		'm-dropdown': 'lib/m-dropdown',
		'm-dropdown.min': 'lib/m-dropdown.min',
		'm-radio': 'lib/m-radio',
		'm-radio.min': 'lib/m-radio.min',
		'slider': 'lib/slider',
		'datatables': 'lib/jquery.dataTables.min',
		'hoverdir': 'lib/hoverdir/jquery.hoverdir',
		'modernizr': 'lib/hoverdir/modernizr.custom.97074',
		'prettyPhoto': 'lib/jquery.prettyPhoto',
		'classie': 'lib/classie',
		'clip': 'lib/ZeroClipboard'
	},
	shim: {
		"datatables": {
			"deps": ['jquery']
		},
		"bootstrap": {
			"deps": ['jquery']
		},
		"clip": {
			"deps": ['jquery']
		}
	}
});

// main.html을 위한 자바스크립트 로딩
requirejs(['app/main']);
