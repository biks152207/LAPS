(function(){
  'use strict';
  angular.module('lapsApp')
    .factory('AuthenticationService', Authentication);
  // Authentication constructor

  function Authentication($timeout, Base64, $rootScope, $localStorage, $cookieStore){
    'ngInject'

    // Object to hold user details
    var user = {};
    // Object to hold the method and values
    var service = {}

    var userCredential = {
      username: 'hideo@laps.careers',
      password: 'beatles!A123zvfc'
    };

    // Login method
    service.Login = Login;
    // Encode give user and password to setup base64
    service.SetCredentials = SetCredentials;

    // Check if user is authenticated
    service.isLoggedIn = isLoggedIn;

    service.getUser = getUser;


    // Function to get user
    function getUser(){
      return $cookieStore.get('user');
    }
    // Login constructor
    function Login(user, callback){
      $timeout(function(){
        // Response which will truthify or falsy
        var response = {
          success: user.username === userCredential.username && user.password === userCredential.password
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
      $rootScope.globals.currentUser.username = user.username;

      $cookieStore.put('user', authData);
      $cookieStore.put('currentUser', $rootScope.globals.currentUser);

    }

    function isLoggedIn(){
      var user = $cookieStore.get('user');
      return  user != undefined;
    }
    return service;
  }

})();
