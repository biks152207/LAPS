(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('changePasswordCtrl', PasswordCtrl);

  function PasswordCtrl(){
    this.name = 'Change password';
  }

})();
