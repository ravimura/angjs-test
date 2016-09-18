(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {

  $scope.showMessage = function () {
    var text = $scope.inputtext;
    //If empty
    if(!text){
      $scope.message = "Please enter data first";
      return;
    }
    
    //Split the string
    var arrayOfStrings = text.split(',');
    var count = arrayOfStrings.length;
    if(count <=3){
      $scope.message = "Enjoy!";
    }
    else{
      $scope.message = "Too much!"
    }
  };

}


})();
