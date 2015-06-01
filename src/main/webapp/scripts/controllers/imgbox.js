app.controller('ImgboxCtrl',['$scope','$modalInstance','model',function($scope,$modalInstance,img){
	
	$scope.img = img;
	
	$scope.closeWin = function(){
		$modalInstance.dismiss('cancel');
	}
}]);