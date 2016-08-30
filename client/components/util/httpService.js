(function(){
  'use strict';
  angular.module('lapsApp')
    .service('HttpService', Service);

  function Service($http, $q, appConfig){
    'ngInject';
    var service = {};

    service.get = CRUD;

    // Function for crude operation with remote api
    function CRUD(method, uri){
      console.log(method);
      console.log(uri);
      return $q(function(resolve, reject){
        $http[method](appConfig.baseUri + uri)
          .then(function(data){
            resolve(data.data);
          }, function(err){
            reject(err);
          })
      });
    }
    return service;
  }

})();
