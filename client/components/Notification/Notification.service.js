(function(){
  'use strict';
  angular.module('lapsApp')
    .service('Notify', Notify);

  function Notify(Notification){
    var service = {};
    var notification = {
      success: function(msg){
        Notification.success(msg);
      },
      error: function(msg){
        Notification.error(msg)
      }
    }
    service.show = show;

    function show(type, msg){
      notification[type](msg);
    }
    return service;
  }

})();
