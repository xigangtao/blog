app.directive('myCard',function(){
	return {
		restrict: 'E',
		transclude : true,
		templateUrl: 'views/directives/my-card.html',
		scope : {
			title : '='
		},
		link : function(scope,elem,attr){
			
		}
	};
});