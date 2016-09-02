(function(){
  'use strict';
  angular.module('lapsApp')
    .factory('jsonData', Factory);

  function Factory(){
    var jsonObject = {
      within:[
        {
          Name: '5 miles',
          value: 5000
        },
        {
          Name: '10 miles',
          value: 10000
        },
        {
          Name: '20 miles',
          value: 20000
        },
        {
          Name: '30 miles',
          value: 30000
        },
        {
          Name: '40 miles',
          value: 40000
        },
        {
          Name: '50 miles',
          value: 50000
        }
      ],
      minSalary:[
        {
          Name: '10,000',
          value: 10000
        },
        {
          Name: '20,000',
          value: 20000
        },
        {
          Name: '30,000',
          value: 30000
        },
        {
          Name: '40,000',
          value: 40000
        },
        {
          Name: '50,000',
          value: 50000
        },
        {
          Name: '60,000',
          value: 60000
        }

      ],
      maxSalary:[
        {
          Name: '10,000',
          value: 10000
        },
        {
          Name: '20,000',
          value: 20000
        },
        {
          Name: '30,000',
          value: 30000
        },
        {
          Name: '40,000',
          value: 40000
        },
        {
          Name: '50,000',
          value: 50000
        },
        {
          Name: '60,000',
          value: 60000
        }

      ],
      employmentType:[
        {
          Name: 'Permanent',
          value: 'p'
        },
        {
          Name: 'temporary',
          value: 't'
        },
        {
          Name: 'contract',
          value: 'c'
        }
      ]
    }
    var service = {};
    service.getJson = getJson;

    function getJson(type){
      return jsonObject[type];
    }

    return service;
  }

})();
