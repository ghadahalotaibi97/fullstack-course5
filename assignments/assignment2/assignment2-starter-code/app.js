(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;

    toBuyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyList();
    toBuyCtrl.buyItem = function (item) {
      ShoppingListCheckOffService.buyItem(item);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      { name: 'cookies', quantity: 10 },
      { name: 'apples', quantity: 5 },
      { name: 'bread', quantity: 2 },
      { name: 'milk', quantity: 1 },
      { name: 'eggs', quantity: 12 }
    ];
    var boughtList = [];

    service.getToBuyList = function () {
      return toBuyList;
    };

    service.getBoughtList = function () {
      return boughtList;
    };

    service.buyItem = function (item) {
      var index = toBuyList.indexOf(item);
      if (index !== -1) {
        toBuyList.splice(index, 1);
        boughtList.push(item);
      }
    };
  }

})();
