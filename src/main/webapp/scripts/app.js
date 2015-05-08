var app = angular.module('blogApp', ['ui.router','ngAnimate','ui.bootstrap','ngCookies','ngMessages','scrollToFixed']);

app.run(['$rootScope','$http',function($rootScope,$http){
	$('body').vegas({
	    timer: false,
	    transitionDuration: 2000,
	    slides: [
	        {
				src : './img/nature1.jpg',
				fade : 2000
			}, {
				src : './img/bw1.jpg',
				fade : 2000
			}, {
				src : './img/portrait1.jpg',
				fade : 2000
			}, {
				src : './img/portrait5.jpg',
				fade : 2000
			}, {
				src : './img/portrait2.jpg',
				fade : 2000
			}, {
				src : './img/portrait3.jpg',
				fade : 2000
			}, {
				src : './img/portrait4.jpg',
				fade : 2000
			}, {
				src : './img/forest.jpg',
				fade : 2000
			}
	    ],
	    overlay: "bower_components/vegas/dist/overlays/09.png"
	});
	
}]);
