'use strict';

angular.module('lapsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myroute', {
        url: '/profile',
        template: '<myroute></myroute>'
      });
  });
