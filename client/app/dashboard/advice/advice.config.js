(function(){
  'use strict';
  angular.module('lapsApp')
    .config(config);

  function config($stateProvider){
    $stateProvider
      .state('advice', {
        abstract: true,
        authRequire: true,
        template: '<ui-view></ui-view>',
        resolve: {
          adviceList: function(HttpService){
            return HttpService.get('/wp/v2/pages');
          }
        }
      })
      .state('advice.list',{
        url: '/advice',
        templateUrl: 'app/dashboard/advice/advice.html',
        controller: 'adviceCtrl',
        controllerAs: 'vm',
        authRequire: true
      })
      .state('advice.id',{
        url: '/advice/:id',
        templateUrl: 'app/dashboard/advice/adviceOne.html',
        controller: 'adviceOneCtrl',
        controllerAs: 'vm',
        authRequire: true,
        resolve: {
          oneAdvice: function(adviceList, $stateParams){
            return adviceList.filter((value) => value.id == $stateParams.id);
          }
        }
      })
  }

})();