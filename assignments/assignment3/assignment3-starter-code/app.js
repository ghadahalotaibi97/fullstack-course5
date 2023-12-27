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

            // Simulating data retrieval from the server
            var mockMenuItems = [
                {name: 'Dish 1', short_name: 'D1', description: 'Delicious dish'},
                {name: 'Dish 2', short_name: 'D2', description: 'Tasty option'},
                {name: 'Dish 3', short_name: 'D3', description: 'Exquisite food'},
            ];

            narrowCtrl.foundItems = mockMenuItems.filter(function (item) {
                return item.description.toLowerCase().includes(narrowCtrl.searchTerm.toLowerCase());
            });
        };

        narrowCtrl.removeItem = function (index) {
            narrowCtrl.foundItems.splice(index, 1);
        };
    }

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        };

        return ddo;
    }
})();
