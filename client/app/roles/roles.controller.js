'use strict';
(function(){



angular.module('lapsApp')
  .controller('rolesCtrl', rolesCtrl);

function rolesCtrl(sectorLists){

  this.sectorLists = sectorLists;
}

})();
