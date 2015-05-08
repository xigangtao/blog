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
	    overlay: "styles/images/09.png"
	});
	
}]);

angular.module('blogApp').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/404');
	
	$stateProvider
		.state('home_', {
	      url: '',
	      templateUrl: 'views/home.html',
	      controller: 'HomeCtrl'
	    })
	    .state('home', {
	      url: '/home',
	      templateUrl: 'views/home.html',
	      controller: 'HomeCtrl'
	    })
	    .state('declare', {
	      url: '/declare',
	      templateUrl: 'views/declare.html',
	      controller: 'DeclareCtrl'
	    })
	    .state('base', {
	      url: '/base',
	      templateUrl: 'views/base.html',
	      controller: 'BaseCtrl'
	    })
	    .state('controller', {
	      url: '/controller',
	      templateUrl: 'views/controller.html',
	      controller: 'ControllerCtrl'
	    })
	    .state('serviceApi', {
	      url: '/serviceApi',
	      templateUrl: 'views/serviceApi.html',
	      controller: 'ServiceApiCtrl'
	    })
	    .state('serviceCustom', {
	      url: '/serviceCustom',
	      templateUrl: 'views/serviceCustom.html',
	      controller: 'ServiceCustomCtrl'
	    })
	    .state('directive', {
	      url: '/directive',
	      templateUrl: 'views/directive.html',
	      controller: 'DirectiveCtrl'
	    })
	    .state('others', {
	      url: '/others',
	      templateUrl: 'views/others.html',
	      controller: 'OthersCtrl'
	    })
	    .state('404', {
	      url: '/404',
	      templateUrl: 'views/404.html',
	      controller: ''
	    });
}]);