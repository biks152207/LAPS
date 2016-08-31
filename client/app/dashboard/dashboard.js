(function(){
  'use strict';

  angular.module('lapsApp')
    .config(function($stateProvider){
        $stateProvider
          .state('parent', {
            abstract: true,
            authRequire: true,
            templateUrl: 'app/dashboard/dashboard.html',
            resolve: {
              userProfileData: function(HttpService, $rootScope){
                return HttpService.post('/members/getmember', {Id: $rootScope.currentUser.userId});
              },
              sportsData: function(HttpService){
                return HttpService.post('/content/getsports');
              }
            }
          })
          .state('parent.profile', {
            url: '/profile',
            templateUrl:'app/dashboard/profile/profile.html',
            controller: 'ProfileCtrl',
            controllerAs: 'vm',
            authRequire: true
          })
          .state('parent.changepassword', {
            url: '/change-password',
            templateUrl: 'app/dashboard/changepassword/changepassword.html',
            controller: 'changePasswordCtrl',
            authRequire: true
          })
          .state('parent.cv', {
            url: '/cv',
            templateUrl: 'app/dashboard/cv/cv.html',
            controller: 'cvCtrl',
            authRequire: true
          })
          .state('parent.cvmanager', {
            url: '/cv-manager',
            templateUrl: 'app/dashboard/cvmanager/cvmanager.html',
            controller: 'cvManagerCtrl',
            authRequire: true
          })
    })
})();
