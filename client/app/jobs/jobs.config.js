(function(){
  'use strict';
  angular.module('lapsApp')
    .config(config);

  function config($stateProvider){
    $stateProvider
      .state('jobs', {
        abstract: true,
        template: '<ui-view></ui-view>'
      })
      .state('jobs.list', {
        url: '/jobs',
        controller: 'jobsCtrl',
        templateUrl: 'app/jobs/jobs.html',
        controllerAs: 'vm',
        authRequire: true
      })
      .state('jobs.id',{
        url: '/jobs/:id',
        templateUrl: 'app/jobs/job.html',
        controller: 'jobsCtrlOne',
        controllerAs: 'vm',
        authRequire: true
      })
  }

})();
