app.controller('HomeCtrl',['$scope',function($scope){
	
	
	
}]);


app.controller('HeaderCtrl',['$scope','$location','$anchorScroll',function($scope,$location,$anchorScroll){
	$scope.$root.achor_url = "#/home";
	
	$scope.toNav = function(){
		if(!$location.url()){
			$location.url('/home');
		}
		var newHash = 'main';
		if ($location.hash() !== newHash) {
			// set the $location.hash to `newHash` and
			// $anchorScroll will automatically scroll to it
			$location.hash(newHash);
		} else {
			// call $anchorScroll() explicitly,
			// since $location.hash hasn't changed
			$anchorScroll();
		}
	}
}]);