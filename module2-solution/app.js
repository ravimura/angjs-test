(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {

    ShoppingListCheckOffService.addToBuyItem("Snacks", 2);
    ShoppingListCheckOffService.addToBuyItem("Cookies", 3);
    ShoppingListCheckOffService.addToBuyItem("Water Bottles", 7);
    ShoppingListCheckOffService.addToBuyItem("Beer", 5);
    ShoppingListCheckOffService.addToBuyItem("Wine", 1);

    this.getItems = function () {
      return ShoppingListCheckOffService.getToBuyItems();
    };

    this.checkItem = function (itemIndex) {
      ShoppingListCheckOffService.checkItem(itemIndex);
    };
  }

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    this.getItems = function () {
      return ShoppingListCheckOffService.getBoughtItems();
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;
    // List of shopping items
    var toBuyItems = [];
    var boughtItems = [];

    service.addToBuyItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      toBuyItems.push(item);
    };

    service.checkItem = function (itemIdex) {
      boughtItems.push(toBuyItems.splice(itemIdex, 1)[0]);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }

})();
