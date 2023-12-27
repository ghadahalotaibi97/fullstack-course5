// myinfo.controller.js
app.controller('MyInfoController', ['$scope', 'UserService', function($scope, UserService) {
  $scope.user = UserService.getUser();
  $scope.userRegistered = UserService.isUserRegistered();
}]);
