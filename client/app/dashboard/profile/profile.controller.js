(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl(HttpService, userProfileData, sportsData, rolesData){
    // Profile data
    this.profile = userProfileData;
    // Sports data
    this.sports = sportsData;
    // Roles data
    this.rolesData = rolesData;
    console.log(this.rolesData);

    // Profile update
    this.profileUpdate = profileUpdate.bind(this);

    function profileUpdate(form){
      console.log(form);
    }

  }
})();
