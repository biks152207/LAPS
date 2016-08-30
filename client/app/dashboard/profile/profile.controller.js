'use strict';
class ProfileController {
  constructor(){
    console.log('here we are');
  }
}

angular.module('lapsApp')
  .controller('ProfileCtrl', ProfileController)
