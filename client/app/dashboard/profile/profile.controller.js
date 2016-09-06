(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl(HttpService, userProfileData, sportsData, rolesData, cacheData, $scope, Notify){
    // Profile data
    this.profile = userProfileData;
    console.log(userProfileData);
    delete this.profile.GeocodingState;
    delete this.profile.JobNotificationState;
    // Storing profile information
    cacheData.set('profile', userProfileData);
    // Sports data
    this.sports = sportsData;
    this.selected = true;
    // Roles data
    this.rolesData = rolesData;

    // Get user's intersted roles
    this.roles = () => {
      HttpService.post('/members/getroles', {Id: this.profile.Id})
        .then(
          (result) =>{
            console.log(result);
          }
        )
    }

    //Copy the selected sports
    this.selectedSports = [];
    this.profile.SportIds.forEach(function(value){
      this.selectedSports.push(String(value));
    }.bind(this))
    // This the users default sports
    this.sportDefaultCheckIn = sportDefaultCheckIn.bind(this);


    // Profile update
    this.profileUpdate = profileUpdate.bind(this);

    function profileUpdate(form, profileData){

      if (form.$valid){
        this.submitted = true;
        // Removes the empty key
        Object.keys(profileData).forEach((key, value) => {
          if (!profileData[key]){
            delete profileData[key];
          }
        })
        HttpService.post('/members/setmember', profileData)
          .then(
            (response) =>{
              this.submitted = false;
              Notify.show('success', 'Successfully updated');
            },
            (error) => {
              Notify.show('error', 'Invalid information')
              this.errors = {};
              this.submitted = false;
              angular.forEach(error.data.data, (error, field) => {
                form[error.field].$setValidity('database', false);
                this.errors[error.field] = error.code;
              })
            }
          )
      }
    }

    $scope.$watchCollection(angular.bind(this, function(){
      return this.selectedSports;
    }), function(newVal){
      if (newVal){
        this.profile.SportIds = [];
        newVal.forEach(function(value){
          this.profile.SportIds.push(Number(value));
        }.bind(this))
      }
    }.bind(this))

    function sportDefaultCheckIn(id){
      return this.profile.SportIds.indexOf(Number(id)) != -1;
    }

  }
})();
