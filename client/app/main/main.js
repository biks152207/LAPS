'use strict';

angular.module('lapsApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/main',
      authRequire: false,
      template: '<main></main>'
    });
  });
