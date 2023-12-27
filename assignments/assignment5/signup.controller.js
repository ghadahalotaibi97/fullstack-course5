// signup.controller.js
app.controller('SignUpController', ['$scope', '$http', 'MenuService', function($scope, $http, MenuService) {
  $scope.user = {};
  $scope.showResultMessage = false;

  $scope.submitForm = function() {
    if ($scope.signupForm.$valid) {
      MenuService.getMenuItem($scope.user.favoriteMenu)
        .then(function(response) {
          $scope.showResultMessage = true;
          $scope.resultMessage = 'Your information has been saved.';
        })
        .catch(function(error) {
          $scope.resultMessage = 'No such menu number exists.';
        });
    }
  };
}]);
