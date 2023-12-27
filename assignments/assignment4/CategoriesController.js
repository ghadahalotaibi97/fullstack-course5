(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService'];

    function CategoriesController(MenuDataService) {
        var categoriesCtrl = this;

        MenuDataService.getAllCategories()
            .then(function (categories) {
                categoriesCtrl.categories = categories;
            });
    }
})();
