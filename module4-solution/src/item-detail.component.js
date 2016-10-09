(function () {
'use strict';

angular.module('MenuApp')
.component('itemDetail', {
  templateUrl: 'item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
