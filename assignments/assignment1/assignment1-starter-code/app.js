(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkLunch = function () {
      // Implement the functionality to check the number of items and set the message
      var items = $scope.lunchItems ? $scope.lunchItems.split(',') : [];
      var message = getMessage(items.length);
      $scope.message = message;
    };

    function getMessage(itemCount) {
      if (itemCount === 0) {
        return 'Please enter data first';
      } else if (itemCount <= 3) {
        return 'Enjoy!';
      } else {
        return 'Too much!';
      }
    }
  }
})();
