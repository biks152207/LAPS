(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('cvManagerCtrl', CvCtrl);

  function CvCtrl(listOfCvs, $rootScope, HttpService, Notify){

    this.new = 2;

    this.OverviewObjectTemplate = {
      'Name': '',
      'PersonalStatement': '',
      'Objectives': '',
      'Hobbies': '',
      'Other': ''
    }

    var cvsData = {
      Employments : {
        "FromMonth": '',
        "FromYear": '',
        "ToMonth": '',
        "ToYear": '',
        "Summary": '',
        "Responsibilities": '',
        "Achievments": ''
      },
      Education: {
        "FromMonth": "",
        "FromYear": "",
        "ToMonth": "",
        "ToYear": "",
        "PlaceOfStudy": "",
        "Subject": "",
        "Qualification": ""
      },
      Courses: {
        "Month": "",
        "Year": "",
        "Name": "",
        "Qualification": ""
      }
    };


    this.cvData = {
      MemberId: $rootScope.currentUser.userId,
      Employments: [angular.extend({},cvsData.Employments)],
      Education: [angular.extend({}, cvsData.Education)],
      Courses: [angular.extend({}, cvsData.Courses)]
    };
    // List of cvs
    this.listOfCvs = listOfCvs;

    this.changeStatus = function(){
      this.new = 2;
      if (this.cvData.Id){
        this.cvData = {
          MemberId: $rootScope.currentUser.userId,
          Employments: [angular.extend({},cvsData.Employments)],
          Education: [angular.extend({}, cvsData.Education)],
          Courses: [angular.extend({}, cvsData.Courses)]
        };
        this.selectedCv = '';
      }
    }.bind(this);

    // add to array
    this.add = function(type){
      this.cvData[type].push(angular.extend({},cvsData[type]));
    }.bind(this);

    // Create/Updates cv
    this.save = save.bind(this);

    function save(form, cvData){
      if (form.$valid){
        this.submitted = true;
        HttpService.post('/members/setcv', angular.copy(cvData))
          .then(
            (response) => {
              this.submitted = false;
              var message;
              cvData.Id ? message = 'Successfully updated': message = 'Successfully added'
              Notify.show('success', message);
            },
            (error) =>{
              Notify.show('error', 'Invalid information');
              this.submitted = false;
            }
          )
      }
    }
    // Pull the old cv with the id
    this.pullCv = pullCv.bind(this);

    function pullCv(cvID){

      if (cvID){
        this.submitted = true;
        HttpService.post('/members/getcv', {Id: cvID})
          .then(
            (response) =>{
              cvID ? this.new = 2 : this.new = 1;
              var response = response;
              response.Overview = {};
              Object.keys(response).forEach(
                (key) => {
                  console.log(key);
                  if (this.OverviewObjectTemplate.hasOwnProperty(key)){
                    console.log(response[key]);
                    response.Overview[key] = response[key];
                    delete response[key];
                  }
                }
              )
              this.cvData = angular.extend(response, angular.copy({
                              MemberId: $rootScope.currentUser.userId,
                              Employments: [angular.extend({},cvsData.Employments)],
                              Education: [angular.extend({}, cvsData.Education)],
                              Courses: [angular.extend({}, cvsData.Courses)]
                            }));
              this.submitted = false;
              console.log(this.cvData);
            }
          )
      }
    }
  }

})();
