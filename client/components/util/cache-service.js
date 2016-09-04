(function(){
  'use strict';
  angular.module('lapsApp')
    .factory('cacheData', cacheData);

  function cacheData(){
    var factory = {};
    factory.set = set;
    factory.get = get;

    function set(key, data){
      console.log(key);
      console.log(data);
      factory[key] = data;
      console.log(factory);
      console.log('factory');
    }

    function get(key){
      return factory[key];
    }
    return factory;
  }

})();
