'use strict';

angular.module('lapsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('job', {
        url: '/job',
        template: '<job></job>'
      });
  });
