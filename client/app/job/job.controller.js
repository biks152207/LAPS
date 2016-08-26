'use strict';
(function(){

class JobComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('lapsApp')
  .component('job', {
    templateUrl: 'app/job/job.html',
    controller: JobComponent
  });

})();
