app.directive('myCard',function(){
	return {
		restrict: 'E',
		transclude : true,
		templateUrl: 'views/directives/my-card.html',
		scope : {
			card : '=',
			loadMore : '&'
		},
		link : function(scope,elem,attr){
			
		}
	};
});