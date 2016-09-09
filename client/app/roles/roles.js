'use strict';

angular.module('lapsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('roles', {
        url: '/sectors',
        abstract: true,
        authRequire: true,
        templateUrl: 'app/roles/header.html',
        resolve: {
          sectorLists: function(HttpService){
            return HttpService.get('/wp/v2/sectors');
          }
        }
      })
      .state('roles.sector', {
        url: '/',
        templateUrl: 'app/roles/roles.html',
        controller: 'rolesCtrl',
        controllerAs: 'vm',
        authRequire: true
      })
      .state('roles.roleList', {
        url: '/:SectorId',
        templateUrl: 'app/roles/role.html',
        resolve: {
          roles: function(HttpService, $stateParams){
            return HttpService.post('/content/getSectorRoles', $stateParams);
          },
          choosenSector: function(sectorLists, $stateParams){
            return sectorLists.filter((sector) => sector.id == $stateParams.SectorId);
          }
        },
        controllerAs:'vm',
        controller: 'eachRoleCtrl',
        authRequire: true
      })
      .state('roles.info', {
        url: '/role/info',
        templateUrl: 'app/roles/rol.html',
        authRequire: true
      });
  });
