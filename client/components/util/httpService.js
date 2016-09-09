(function(){
  'use strict';
  angular.module('lapsApp')
    .service('HttpService', Service);

  function Service($http, $q, appConfig, $httpParamSerializerJQLike){
    'ngInject';
    var service = {};

    service.get = get;
    service.post = post;

    // Function for crude operation with remote api
    function get(uri){
      console.log(uri);
      return $q(function(resolve, reject){
        $http.get(appConfig.baseUri2 + uri)
          .then(function(data){
            resolve(data.data);
          }, function(err){
            reject(err);
          })
      });
    }
    function post(uri, params){
      return $q(function(resolve, reject){
        var requestHeaders = {
          url: appConfig.baseUri + uri,
          method: "POST",
          headers: {
              'content-type': 'application/x-www-form-urlencoded'
          }
        }
        params ? requestHeaders.data = $httpParamSerializerJQLike(params): '';
        $http(requestHeaders).then(function successCallback(response) {
          resolve(response.data)
         }, function errorCallback(err) {
          reject(err);
         });

      });
    }
    return service;
  }

})();
