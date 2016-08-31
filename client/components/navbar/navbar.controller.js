'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(AuthenticationService) {
    this.isLoggedIn = AuthenticationService.isLoggedIn;
    // this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = AuthenticationService.getUser;
  }

}

angular.module('lapsApp')
  .controller('NavbarController', NavbarController);
