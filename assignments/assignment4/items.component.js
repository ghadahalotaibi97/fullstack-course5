// items.component.js
(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'path/to/items.template.html',
            bindings: {
                items: '<'
            }
        });
})();
