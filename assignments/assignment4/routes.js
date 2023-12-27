(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<h1>Welcome to our Restaurant</h1>'
            })
            .state('categories', {
                url: '/categories',
                template: '<categories></categories>'
            })
            .state('items', {
                url: '/items/{categoryShortName}',
                template: '<items category="$resolve.category"></items>',
                resolve: {
                    category: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getAllCategories()
                            .then(function (categories) {
                                return categories.find(function (category) {
                                    return category.short_name === $stateParams.categoryShortName;
                                });
                            });
                    }]
                }
            });
    }
})();
