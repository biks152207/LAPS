(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('cvCtrl', CvCtrl);

  function CvCtrl(){
    this.cv = {};
    // Exectues when file is uploaded

    this.upload = upload

    function upload($files){
      console.log($files);
    }
  }

})();
