(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('jobsCtrl', jobsCtrl);

  function jobsCtrl(jsonData){
    // Search model
    this.params = null;
    // Default search parameters
    this.basedOn = "basedOnProfile";
    // Search parameters
    this.searchCriteria = {
      basedOnProfile:{
        Roles: [1, 2]
      },
      customBased : {}
    }
    // Search Parameters
    this.searchParams = searchParams.bind(this);
    this.searchParams();

    // Within miles
    this.miles = jsonData.getJson('within');

    // Minumum salary list
    this.minimumSalaryList = jsonData.getJson('minSalary');

    // Maximum salary list
    this.maximumSalaryList = jsonData.getJson('maxSalary');

    function searchParams(){
      this.params = this.searchCriteria[this.basedOn];
      console.log(this.params);
    }
  }

})();