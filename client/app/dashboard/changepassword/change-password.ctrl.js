(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('changePasswordCtrl', PasswordCtrl);

  function PasswordCtrl(HttpService, $rootScope){
    this.formData = {};

    // Function to change password
    this.changePassword = changePassword;

    function changePassword(form){
      if (form.$valid){
        console.log(angular.extend({Id: $rootScope.currentUser.userId },this.formData));
        HttpService.post('/content/changepassword', angular.extend({Id: $rootScope.currentUser.userId },this.formData))
          .then(
            (response) => {
              console.log(response);
            },
            (err) => {
              console.log(err);
            }
          )
      }
    }
  }

})();
