(function(){
  'use strict';
  angular.module('lapsApp')
    .factory('AuthenticationService', Authentication);
  // Authentication constructor

  function Authentication($timeout, Base64, $rootScope, $localStorage, $cookieStore, HttpService, $http){
    'ngInject'

    // Object to hold user details
    $rootScope.currentUser = {};
    // Object to hold the method and values
    var service = {}

    // Stores the base64
    var authData;
    // Login method
    service.Login = Login;
    // Encode give user and password to setup base64
    service.SetCredentials = SetCredentials;

    // Check if user is authenticated
    service.isLoggedIn = isLoggedIn;

    service.getUser = getUser;

    // Clear all the cookies and user information from the $rootScope
    service.clearUser = clearUser;


    // Function to get user
    function getUser(){
      return $cookieStore.get('user').user;
    }

    // Function clear the user from cookies and $rootScope
    function clearUser(){
      $cookieStore.remove('user');
      $rootScope.currentUser = {};
    }
    // Login constructor
    function Login(user, callback){
      console.log(user);
      authData = Base64.encode(user.username + ':' + user.password);
      $http.defaults.headers.common['Authorization'] = 'Basic ' + authData;
      console.log(authData);
      HttpService.post('/members/authenticate')
        .then(function(data){
          callback(data)
        }, function(err){
          callback(err);
        })
      // $timeout(function(){
      //   // Response which will truthify or falsy
      //   var response = {
      //     success: user.username === userCredential.username && user.password === userCredential.password
      //   };
      //   if (!response.success){
      //     response.message = 'Invalid username or password'
      //   }
      //   callback(response);
      // }, 1000);
    }

    function SetCredentials(user, userId){
      // Holds the user information
      $rootScope.currentUser = {
        user: user,
        auth: authData,
        userId: userId
      }
      $cookieStore.put('user', $rootScope.currentUser);

    }

    function isLoggedIn(){
      var user = $cookieStore.get('user');
      return  user != undefined;
    }
    return service;
  }

})();
