(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('cvManagerCtrl', CvCtrl);

  function CvCtrl(){
    this.name = 'CV';
  }

})();