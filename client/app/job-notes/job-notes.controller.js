'use strict';
(function(){

class JobNotesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('lapsApp')
  .component('jobNotes', {
    templateUrl: 'app/job-notes/job-notes.html',
    controller: JobNotesComponent
  });

})();
