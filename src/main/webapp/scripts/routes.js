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
	    .state('about', {
	      url: '/about',
	      templateUrl: 'views/about.html',
	      controller: 'AboutCtrl'
	    })
	    .state('contact', {
	      url: '/contact',
	      templateUrl: 'views/contact.html',
	      controller: 'ContactCtrl'
	    })
	    .state('sign', {
	      url: '/sign',
	      templateUrl: 'views/sign.html',
	      controller: 'SignCtrl'
	    })
	    .state('404', {
	      url: '/404',
	      templateUrl: 'views/404.html',
	      controller: ''
	    });
}]);