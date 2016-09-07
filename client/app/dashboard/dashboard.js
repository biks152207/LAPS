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
              userProfileData: function(HttpService, $rootScope, $q, cacheData){
                // var defer = $q.defer();
                // var cacheProfileData = cacheData.get('profile');
                // if (_.isEmpty(cacheProfileData)){
                //   HttpService.post('/members/getmember', {Id: $rootScope.currentUser.userId})
                //     .then(
                //       (response) =>{
                //         defer.resolve(response);
                //       }
                //     )
                // }else{
                //   defer.resolve(cacheProfileData);
                // }
                // return HttpService.post('/members/getmember', {Id: $rootScope.currentUser.userId});
                // return defer.promise;
                return HttpService.post('/members/getmember', {Id: $rootScope.currentUser.userId});
              },
              sportsData: function(HttpService){
                return HttpService.post('/content/getsports');
              },
              rolesData: function(HttpService){
               return HttpService.post('/content/getsectors');
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
            controllerAs: 'vm',
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
            authRequire: true,
            controllerAs: 'vm',
            resolve:{
              listOfCvs: function(HttpService, $rootScope){
                return HttpService.post('/members/getcvs', {Id: $rootScope.currentUser.userId});
              }
            }
          })
    })
})();
