(function () {
    'use strict';

    angular.module('MenuApp', ['ui.router'])
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
                templateUrl: 'categories.template.html',
                controller: 'CategoriesController as categoriesCtrl'
            })
            .state('items', {
                url: '/items/{categoryShortName}',
                templateUrl: 'items.template.html',
                controller: 'ItemsController as itemsCtrl',
                resolve: {
                    category: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            });
    }
})();
