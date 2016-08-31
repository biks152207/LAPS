'use strict';

angular.module('lapsApp')
  .config(function($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        title: 'Login',
        authRequire: false
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'main',
        authRequire: false,
        template: '',
        controller: function($state, AuthenticationService) {
          console.log('logout');
          AuthenticationService.clearUser();
          // Auth.logout();
          $state.go('main');
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm',
        authRequire: false,
        title: 'Register',
        resolve:{
          sportsData: ['HttpService', function(HttpService){
            return HttpService.post('/content/getsports');
          }]
        }
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true,
        title: 'Setting'
      });
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
