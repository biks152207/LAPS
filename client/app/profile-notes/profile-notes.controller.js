'use strict';
(function(){

class ProfileNotesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('lapsApp')
  .component('profileNotes', {
    templateUrl: 'app/profile-notes/profile-notes.html',
    controller: ProfileNotesComponent
  });

})();
