(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl(HttpService,userProfileData,sportsData){
    console.log(userProfileData);
    console.log(sportsData);
    console.log('roles');
    // Profile data
    this.profile = userProfileData;
    // Sports data
    this.sports = sportsData;

  }
})();
