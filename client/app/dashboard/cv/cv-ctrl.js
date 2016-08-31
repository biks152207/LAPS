(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('cvCtrl', CvCtrl);

  function CvCtrl(){
    this.name = 'CV';
  }

})();