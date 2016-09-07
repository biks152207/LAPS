(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('cvManagerCtrl', CvCtrl);

  function CvCtrl(listOfCvs, $rootScope){
    console.log('getting cvs');
    console.log(listOfCvs);
    this.cvData = {
      MemberId: $rootScope.currentUser.userId
    };
    // List of cvs
    this.listOfCvs = listOfCvs;
    this.new = false;
  }

})();