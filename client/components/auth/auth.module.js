'use strict';

angular.module('lapsApp.auth', ['lapsApp.constants', 'lapsApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
