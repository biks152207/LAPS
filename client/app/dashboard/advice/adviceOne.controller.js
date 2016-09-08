(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('adviceOneCtrl', adviceOneCtrl);

  function adviceOneCtrl(oneAdvice){
    this.oneAdvice = oneAdvice;
  }

})();