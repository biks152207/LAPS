'use strict';

angular.module('lapsApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      authRequire: false,
      template: '<main></main>'
    });
  });
