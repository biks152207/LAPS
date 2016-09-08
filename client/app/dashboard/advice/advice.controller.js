(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('adviceCtrl', adviceCtrl);

  function adviceCtrl(adviceList){
    this.name = "Name";
    this.adviceList = adviceList;
  }

})();