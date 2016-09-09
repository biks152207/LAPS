(function(){
  'use strict';
  angular.module('lapsApp')
    .directive('fileUploader', ['$rootScope', 'HttpService',function ($rootScope, HttpService) {
      return {
        restrict: 'AE',
        link: function(scope, element, attributes, ngModel) {
          element.on('change', function($event){
            var input = document.getElementById("exampleInputFile");
            var fReader = new FileReader();
            fReader.readAsDataURL(input.files[0]);
            fReader.onload = function (e) {
                 console.log(e.target.result);
                 var obj ={Name: 'Bikram upload', Path: e.target.result, MemberId: $rootScope.currentUser.userId}
                 console.log(obj);
                 HttpService.post('/members/setuploadedcv', obj)
                   .then(
                     (response) => {
                       console.log(response);
                     },
                     (err) =>{
                       console.log(err);
                       console.log('err');
                     }
                   )
             };
          //  reader.readAsDataURL(f.files[0]);
            // console.log(fReader);
            // var obj ={Name: 'Bikram upload', Path: filepath, MemberId: $rootScope.currentUser.userId}
            // console.log(obj);
            // HttpService.post('/members/setuploadedcv', obj)
            //   .then(
            //     (response) => {
            //       console.log(response);
            //     },
            //     (err) =>{
            //       console.log(err);
            //       console.log('err');
            //     }
            //   )
          })
        }
    };
    }])

})();
