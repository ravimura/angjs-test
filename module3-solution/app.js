(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);


  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];

  function NarrowItDownController($scope, MenuSearchService) {

    var list = this;
    list.found =[];

    list.search = function (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems($scope.searchterm);

      promise.then(function (response) {
        list.found = response;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });

    }

    list.removeItem = function (itemIndex) {
      list.found.splice(itemIndex, 1);
    };

  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        list: '=myList',
        onRemove: '&'
      }
    };

    return ddo;
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {

    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
          method: "GET",
          url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
          // process result and only keep items that match
          var foundItems = [];

          if(!searchTerm){
            return foundItems;
          }

          var length = result.data.menu_items.length;

          searchTerm = searchTerm.toLowerCase();
          for(var i = 0; i < length; i++) {
            if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) > -1) {
                foundItems.push(result.data.menu_items[i]);
            }
          }
          // return processed items
          return foundItems;
      });

      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: shortName
        }
      });

      return response;

    }
  }

})();
