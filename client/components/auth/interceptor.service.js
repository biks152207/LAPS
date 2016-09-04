'use strict';

(function() {

  function authInterceptor($rootScope, $q, $cookieStore, $injector, Util) {
    var state;
    return {
      // Add authorization token to headers
      request(config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('user')) {
          config.headers.Authorization = 'Basic ' + $cookieStore.get('user').auth;
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError(response) {
        if (response.status === 401) {
          (state || (state = $injector.get('$state')))
          .go('login');
          // remove any stale tokens
          $cookies.remove('token');
        }
        return $q.reject(response);
      }
    };
  }

  angular.module('lapsApp.auth')
    .factory('authInterceptor', authInterceptor);
})();
