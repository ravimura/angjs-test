(function () {
'use strict';

angular.module('public')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  service.user = null;

  service.registerUser = function(user){
    service.user = user;
  }

  service.getUser = function(){
    console.log("getting user");
    return service.user;
  }

}

})();
