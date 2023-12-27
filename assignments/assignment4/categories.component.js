// categories.component.js
(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'path/to/categories.template.html',
            bindings: {
                categories: '<'
            }
        });
})();
