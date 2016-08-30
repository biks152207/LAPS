(function(){
  'use strict';

  angular.module('lapsApp')
    .config(function($stateProvider){
        $stateProvider
          .state('parent', {
            abstract: true,
            authRequire: true
          })
          .state('parent.profile', {
            url: '/profile',
            templateUrl:'app/dashboard/profile/profile.html',
            controller: 'ProfileCtrl',
            controllerAs: 'vm',
            authRequire: true
          })
    })
})();
