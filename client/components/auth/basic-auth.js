(function(){
  'use strict';
  angular.module('lapsApp')
    .factory('AuthenticationService', Authentication);
  // Authentication constructor

  function Authentication($timeout, Base64, $rootScope, $localStorage, $cookieStore){
    'ngInject'
    // Object to hold the method and values
    var service = {}

    // Specific user credentials
    var user = {
      username: 'hideo@laps.careers',
      password: 'G!Q4!on6(1cszzdiW&kg)pD0'
    };

    // Login method
    service.Login = Login;
    // Encode give user and password to setup base64
    service.SetCredentials = SetCredentials;


    // Login constructor
    function Login(user, callback){
      $timeout(function(){
        // Response which will truthify or falsy
        var response = {
          success: user.username === 'hideo@laps.careers' && user.password === 'G!Q4!on6(1cszzdiW&kg)pD0'
        };
        if (!response.success){
          response.message = 'Invalid username or password'
        }
        callback(response);
      }, 1000);
    }

    function SetCredentials(user){
      var authData = Base64.encode(user.username + ':' + user.password);
      // Holds the user information
      $rootScope.gobals = {
        currentUser : {
          username: user.username,
          authdata: authData
        }
      };
      $cookieStore.put('user', authData);

    }
    return service;
  }

})();
