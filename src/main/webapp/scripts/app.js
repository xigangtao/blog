var app = angular.module('blogApp', ['ui.router','ngAnimate','ui.bootstrap','ngCookies','ngMessages','scrollToFixed']);

app.run(['$rootScope','$http',function($rootScope,$http){
	$('body').vegas({
	    timer: false,
	    transitionDuration: 2000,
//	    slides: [
//	        {
//				src : './img/y002.JPG',
//				fade : 2000
//			}, {
//				src : './img/y005.JPG',
//				fade : 2000
//			}, {
//				src : './img/y008.JPG',
//				fade : 2000
//			}, {
//				src : './img/y010.JPG',
//				fade : 2000
//			}, {
//				src : './img/y019.JPG',
//				fade : 2000
//			}, {
//				src : './img/y041.JPG',
//				fade : 2000
//			}
//	    ],
	    overlay: "styles/images/09.png"
	});
	
}]);
