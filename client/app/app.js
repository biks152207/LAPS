'use strict';

angular.module('lapsApp', ['lapsApp.auth', 'lapsApp.admin', 'lapsApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match',
    'ngMessages', 'ngStorage'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(['$rootScope', function($rootScope){
    // Executes when the transition to certain routes start
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams){
      setLoadingState('start');
    });
     // Executes when the transition to the page is successful
    $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams){
      setLoadingState('end');
    });

    var setLoadingState = function(state){
      state == 'start' ? $rootScope.isLoading = true: $rootScope.isLoading = false;
    }
  }])
