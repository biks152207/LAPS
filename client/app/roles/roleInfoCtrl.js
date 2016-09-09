(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('roleInfoCtrl', roleInfoCtrl);

  function roleInfoCtrl(role, choosenSector){
    this.sector = choosenSector;
    this.role = role;
  }

})();
