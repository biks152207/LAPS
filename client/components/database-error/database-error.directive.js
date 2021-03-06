'use strict';

/**
 * Removes server error when user updates input
 */

angular.module('lapsApp')
  .directive('databaseError', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        element.on('keydown', () => {
          ngModel.$setValidity('database', true)
        });
      }
    };
  });
