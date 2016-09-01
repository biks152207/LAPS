(function(){
  'use strict';
  angular.module('lapsApp')
    .config(config);

  function config($stateProvider){
    $stateProvider
      .state('jobs', {
        url: '/jobs',
        controller: 'jobsCtrl',
        templateUrl: 'app/jobs/jobs.html',
        controllerAs: 'vm',
        authRequire: true
      })
  }

})();