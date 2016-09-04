(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('jobsCtrlOne', jobsCtrlOne);

  function jobsCtrlOne(job, HttpService, $rootScope){
    this.job = job;
    // Find weather
    console.log($rootScope);
    console.log(this.job);

    // check whether the user has already visited  the job or not
    // this.alreadyVisited = alreadyVisited.bind(this);
    // this.alreadyVisited();


    // function alreadyVisited(){
    //   HttpService.post('/members/recordjobview', angular.merge({Id: $rootScope.currentUser.userId}, {JobId:this.job.Id}))
    //     .then(
    //       (response) =>{
    //         console.log(response);
    //       }
    //     )
    // }
  }

})();
