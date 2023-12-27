(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'items.template.html',
            bindings: {
                category: '<'
            },
            controller: ItemsController
        });

    ItemsController.$inject = ['MenuDataService'];

    function ItemsController(MenuDataService) {
        var $ctrl = this;

        $ctrl.$onChanges = function (changesObj) {
            if (changesObj.category) {
                MenuDataService.getItemsForCategory(changesObj.category.currentValue.short_name)
                    .then(function (items) {
                        $ctrl.items = items;
                    });
            }
        };
    }
})();
