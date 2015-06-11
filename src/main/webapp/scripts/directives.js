app.directive('imgBox',function(){
	return {
		restrict : 'E',
		replace : true,//替换标签
		transclude: true,//显示原始类容
		templateUrl : 'views/directives/imgbox.html',
		scope : {
			url : '=',
		},
		link: function (scope, elem, attrs) {
            elem.on('mouseenter', function () {
            	elem.addClass("active");
            });
            elem.on('mouseleave', function () {
            	elem.removeClass("active");
            });
        }
	}
});
