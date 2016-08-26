'use strict';

angular.module('lapsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('job-notes', {
        url: '/job-notes',
        template: '<job-notes></job-notes>'
      });
  });
