(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('jobsCtrl', jobsCtrl);

  function jobsCtrl(jsonData, $http, HttpService){
    // Search model
    this.params = {};
    // Default search parameters
    this.basedOn = "customBased";

    // Profile information
    // this.profileData = profileData;
    // this.params.Location = angular.copy(this.profileData.AddressLines);
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

    // employment type
    this.employmentList = jsonData.getJson('employmentType');

    // search jobs based on the params;
    this.searchJob = searchJob.bind(this);

    this.getLocation = function(inputValue) {
        return $http.get('/api/things?address='+ inputValue)
          .then(function(data){
            var data = JSON.parse(data.data);
            return data.results;
          }.bind(this))
      }.bind(this);

    this.onSelect = function(address){
      this.params.SearchOriginLatitude =  address.geometry.location.lat;
      this.params.SearchOriginLongtitude = address.geometry.location.lng;
    }

    function searchParams(){
      this.params = this.searchCriteria[this.basedOn];
    }

    function searchJob(form, searchParams){
      console.log(searchParams);
      if (form.$valid){
        this.submitted = true;
        HttpService.post('/members/getjoblist', searchParams)
          .then(
            (response) => {
              this.jobsLists = response;
              this.submitted = false;

            },
            (err) =>{
              this.submitted = false;
            }
          )
      }
    }
  }

})();
