app.factory('ModalService', ['$modal', function ($modal) {
	function createModel(item) {
        return {
          model : function () {
            return item ? item : null;
          }
        };
      }
	return {
		openImgbox : function(model){
			 return $modal.open({
                 templateUrl: 'imgbox-template',
                 controller: 'ImgboxCtrl',
                 resolve: createModel(model)
//                 ,
//                 size : 'lg'
             });
		}
	}
}]);