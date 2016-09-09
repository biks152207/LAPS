'use strict';

class LoginController {
  constructor(Auth, $state, AuthenticationService, $timeout) {
    this.user = {};
    this.timeout = $timeout;
    this.AuthenticationService = AuthenticationService;
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }

  setTimer(value){
    this.timeout(function(){
      this.errMessage = false;
    }.bind(this), 4000)
  }

  login(form) {
    if (form.$valid) {
      this.submitted = true;
      this.AuthenticationService.Login(this.user,
        (response) => {
          if (response.status == 500){
            this.submitted = false;
            this.errMessage = response.data.code;
            this.setTimer(this.errMessage);
          }else{
            this.AuthenticationService.SetCredentials(this.user, response.id);
            this.$state.go('parent.profile');
          }
        }
      )
      // this.Auth.login({
      //     email: this.user.email,
      //     password: this.user.password
      //   })
      //   .then(() => {
      //     // Logged in, redirect to home
      //     this.$state.go('main');
      //   })
      //   .catch(err => {
      //     this.errors.other = err.message;
      //   });
    }
  }
}

angular.module('lapsApp')
  .controller('LoginController', LoginController);
