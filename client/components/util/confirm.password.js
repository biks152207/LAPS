(function(){
  'use strict';
  angular.module('lapsApp')
    .directive('compareTo', [function () {
      return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
            console.log('test')
            ngModel.$validators.compareTo = function(modelValue) {
                console.log(modelValue);
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
    }])

})();