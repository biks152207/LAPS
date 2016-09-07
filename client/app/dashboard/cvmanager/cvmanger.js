(function(){
  'use strict';
  angular.module('lapsApp')
    .controller('cvManagerCtrl', CvCtrl);

  function CvCtrl(listOfCvs, $rootScope, HttpService, Notify){

    this.new = 2;

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


    // add to array
    this.add = function(type){
      this.cvData[type].push(angular.extend({},cvsData[type]));
    }.bind(this);

    // Create/Updates cv
    this.save = save.bind(this);

    function save(form, cvData){
      if (form.$valid){
        this.submitted = true;
        HttpService.post('/members/setcv', cvData)
          .then(
            (response) => {
              this.submitted = false;
              Notify.show('success', 'Successfully submitted')
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
      console.log('we are here');
      cvID ? this.new = 2 : this.new = 1;
      if (cvID){
        HttpService.post('/members/getcv', {Id: cvID})
          .then(
            (response) =>{
              console.log(response);
            }
          )
      }
    }
  }

})();