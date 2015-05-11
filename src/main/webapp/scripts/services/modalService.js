app.factory('ModalService', ['$modal', function ($modal) {
	
	return {
		openImgbox : function(url){
			 return $modal.open({
                 templateUrl: 'imgbox-template',
                 controller: 'ImgboxCtrl',
                 resolve: function(){
                	 return url;
                 },
                 size : 'lg'
             });
		}
	}
}]);