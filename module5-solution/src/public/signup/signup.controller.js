(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['$http','SignupService'];

function SignupController($http, $SignupService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.message = "";

  $ctrl.submit = function(){
    var url="https://ychaikin-course5.herokuapp.com/menu_items.json?category="+$ctrl.user.menu_item;

    $http({
        method: "GET",
        url: url
    }).then(function (result) {
      if(result.data.menu_items.length >0){
          $SignupService.registerUser($ctrl.user);
          $ctrl.message = "Your information has been saved !!";
        }
        else{
          $ctrl.message = "No such menu number exists !!";
        }
    }, function (response) {
      $ctrl.message = "Error occured while validating menu item !!";
    });
  }
}

})();
