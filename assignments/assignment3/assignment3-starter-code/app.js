(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['$http'];
  function NarrowItDownController($http) {
    var narrowCtrl = this;
    narrowCtrl.searchTerm = '';
    narrowCtrl.foundItems = [];

    narrowCtrl.narrowItDown = function () {
      if (narrowCtrl.searchTerm.trim() === '') {
        narrowCtrl.foundItems = [];
        return;
      }

      // Implement the logic to fetch and filter menu items from the server
      // Update narrowCtrl.foundItems with the filtered items
    };

    narrowCtrl.removeItem = function (index) {
      narrowCtrl.foundItems.splice(index, 1);
    };
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'itemsloaderindicator.template.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

})();
