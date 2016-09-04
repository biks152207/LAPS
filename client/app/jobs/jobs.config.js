(function(){
  'use strict';
  angular.module('lapsApp')
    .config(config);

  function config($stateProvider){
    $stateProvider
      .state('jobs', {
        abstract: true,
        template: '<ui-view></ui-view>'
        // resolve:{
        //   profileData: function(cacheData, $q, HttpService, $rootScope){
        //     var defer = $q.defer();
        //     var cacheProfileData = cacheData.get('profile');
        //     if (_.isEmpty(cacheProfileData)){
        //       HttpService.post('/members/getmember', {Id: $rootScope.currentUser.userId})
        //         .then(
        //           (response) =>{
        //             defer.resolve(response);
        //           }
        //         )
        //     }else{
        //       defer.resolve(cacheProfileData);
        //     }
        //     // return HttpService.post('/members/getmember', {Id: $rootScope.currentUser.userId});
        //     return defer.promise;
        //   }
        // }
      })
      .state('jobs.list', {
        url: '/jobs',
        controller: 'jobsCtrl',
        templateUrl: 'app/jobs/jobs.html',
        controllerAs: 'vm',
        authRequire: true
      })
      .state('jobs.id',{
        url: '/jobs/:Id',
        templateUrl: 'app/jobs/job.html',
        controller: 'jobsCtrlOne',
        controllerAs: 'vm',
        authRequire: true,
        resolve:{
          job: function(HttpService, $stateParams){
            return HttpService.post('/members/getjob', $stateParams);
          }
        }
      })
  }

})();
