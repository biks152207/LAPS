'use strict';

angular.module('lapsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('roles', {
        url: '/roles',
        abstract: true,
        authRequire: true,
        templateUrl: 'app/roles/header.html',
        resolve: {
          sectorLists: function(HttpService){
            return HttpService.post('/content/getsectors');
          }
        }
      })
      .state('roles.sector', {
        url: '/sectors',
        templateUrl: 'app/roles/roles.html',
        controller: 'rolesCtrl',
        controllerAs: 'vm',
        authRequire: true
      })
      .state('roles.roleList', {
        url: '/sectors',
        template: '<roles></roles>',
        authRequire: true
      })
      .state('roles.info', {
        url: '/sectors',
        template: '<roles></roles>',
        authRequire: true
      });
  });
