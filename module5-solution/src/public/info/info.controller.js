(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignupService'];

function InfoController($SignupService) {

  var $ctrl = this;

  $ctrl.user = $SignupService.getUser();

}

})();
