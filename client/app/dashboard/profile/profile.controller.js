(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl(HttpService, userProfileData, sportsData, rolesData, cacheData){
    // Profile data
    this.profile = userProfileData;
    // Storing profile information
    cacheData.set('profile', userProfileData);
    // Sports data
    this.sports = sportsData;
    this.selected = true;
    // Roles data
    this.rolesData = rolesData;

    // This the users default sports
    this.sportDefaultCheckIn = sportDefaultCheckIn.bind(this);

    // Profile update
    this.profileUpdate = profileUpdate.bind(this);

    function profileUpdate(form, profileData){
      if (form.$valid){
        HttpService.post('/members/getmember', profileData)
          .then(
            (response) =>{
              console.log(response);
            }
          )
      }
    }

    function sportDefaultCheckIn(id){
      console.log(id);
    }

  }
})();
