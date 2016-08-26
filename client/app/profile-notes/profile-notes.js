'use strict';

angular.module('lapsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile-notes', {
        url: '/profile-notes',
        template: '<profile-notes></profile-notes>'
      });
  });
