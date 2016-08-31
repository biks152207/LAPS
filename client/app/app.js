'use strict';

angular.module('lapsApp', ['lapsApp.auth', 'lapsApp.admin', 'lapsApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match',
    'ngMessages', 'ngStorage'
  ])
  .config(function($urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    // Enable cors in angular
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .run(['$rootScope', '$cookieStore', 'AuthenticationService', '$state', function($rootScope, $cookieStore, AuthenticationService, $state){

    // keep user logged in after page refresh
    $rootScope.currentUser = $cookieStore.get('user') || {};

    // Executes when the transition to certain routes start
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams){
      console.log(toState);
      if (!toState.authRequire && toState.name !='logout' && AuthenticationService.isLoggedIn()){
        e.preventDefault();
        setLoadingState('end');
        $state.go('parent.profile');
        return;
      }

      if (toState.authRequire && !AuthenticationService.isLoggedIn()){
        e.preventDefault();
        setLoadingState('end');
        $state.go('login');
        return;
      }
      console.log('change start');
      setLoadingState('start');
    });

     // Executes when the transition to the page is successful
    $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams){
      setLoadingState('end');
      setTitleOfPage(toState.title);
    });

    var setLoadingState = function(state){
      state == 'start' ? $rootScope.isLoading = true: $rootScope.isLoading = false;
      console.log($rootScope.isLoading);
    }
    var setTitleOfPage = function(title){
      title ? $rootScope.titleOfPage = title : '';
     }
  }])
