app.controller('HomeCtrl',['$scope','ModalService',function($scope, modalService){
	
	$scope.items = [{
		id : 1,
		type : 1,
		date : '2015-02-05',
		imgs : [{
			url : 'img/IMG_20131214_201218.jpg'
		},{
			url : 'img/IMG_20131227_212010.jpg'
		},{
			url : 'img/IMG_20140124_195602.jpg'
		},{
			url : 'img/IMG_20140208_200346.jpg'
		}]
	},{
		id : 2,
		type : 1,
		date : '2015-02-06',
		imgs : [{
			url : 'img/IMG_20140430_194304.jpg'
		},{
			url : 'img/IMG_20140511_091722.jpg'
		},{
			url : 'img/IMG_20140511_091728.jpg'
		},{
			url : 'img/IMG_20140518_123621.jpg'
		}]
	},{
		id : 2,
		type : 2,
		date : '2015-02-04',
		imgs : [{
			url : 'img/v6.mp4'
		}]
	}];
	$scope.load = function(id){
		alert(id)
	}
	
	$scope.openImgbox = function(){
		modalService.openImgbox();
	}
}]);

