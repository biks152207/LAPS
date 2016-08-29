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
      value = false
    }, 1000)
  }

  login(form) {
    if (form.$valid) {
      this.submitted = true;
      this.AuthenticationService.Login(this.user,
        (response) => {
          if (!response.success){
            this.submitted = false;
            this.errMessage = response.message;
            this.setTimer(this.errMessage);
          }else{
            this.AuthenticationService.SetCredentials(this.user);
            this.$state.go('myroute');
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
