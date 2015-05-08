app.controller('HomeCtrl',['$scope',function($scope){
	
	$scope.items = [{
		id : 1,
		type : 'pic',
		date : '2015-02-05',
		imgs : [{
			url : 'img/bw1.jpg'
		},{
			url : 'img/bw1.jpg'
		},{
			url : 'img/bw1.jpg'
		},{
			url : 'img/bw1.jpg'
		}]
	},{
		id : 2,
		type : 'pic',
		date : '2015-02-06',
		imgs : [{
			url : 'img/portrait1.jpg'
		},{
			url : 'img/portrait1.jpg'
		},{
			url : 'img/portrait1.jpg'
		},{
			url : 'img/portrait1.jpg'
		}]
	}];
	$scope.load = function(id){
		alert(id)
	}
}]);

