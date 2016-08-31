(function(){
  'use strict';

  angular.module('lapsApp')
    .config(function($stateProvider){
        $stateProvider
          .state('parent', {
            abstract: true,
            authRequire: true,
            template: '<ui-view></ui-view>'
          })
          .state('parent.profile', {
            url: '/profile',
            templateUrl:'app/dashboard/profile/profile.html',
            controller: 'ProfileCtrl',
            controllerAs: 'vm',
            authRequire: true,
            resolve: {
              userProfileData: function(HttpService, $rootScope){
                return HttpService.post('/members/getmember', {Id: $rootScope.currentUser.userId});
              },
              sportsData: function(HttpService){
                return HttpService.post('/content/getsports');
              }
            }
          })
    })
})();
