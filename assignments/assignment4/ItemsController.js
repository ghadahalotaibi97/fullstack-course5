(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['category'];

    function ItemsController(category) {
        var itemsCtrl = this;

        itemsCtrl.category = category;
    }
})();
