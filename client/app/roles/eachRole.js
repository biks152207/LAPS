'use strict';
(function(){



angular.module('lapsApp')
  .controller('eachRoleCtrl', eachRoleCtrl);

function eachRoleCtrl(roles, choosenSector, $stateParams){
  this.roles = roles;
  console.log(roles);
  console.log('this is a roles');
  this.choosenSector = choosenSector;
  console.log(this.choosenSector);
  console.log('choosen');
  // // Get the sector based on the SectorId parameters from the url
  // this.getChoosenSector = getChoosenSector.bind(this);
  // this.getChoosenSector();
  //
  // function getChoosenSector(){
  //   this.choosenSector = sectorLists.filter((sector) => sector.Id == $stateParams.SectorId);
  // }
}

})();
