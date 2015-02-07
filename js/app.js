// AngularJS APP
var app = angular.module('cnjgApp', [])
  .controller('homeCtr', function ($scope, $http) {

    var sound = new Audio('sounds/High_Definition_Machine_gun.mp3');
    var isLocked = false;

    $scope.current_joke = "";
    $scope.previous_jokes = [];

    // Get new joke function.
    $scope.getNewJoke = function () {
      if (isLocked) {
        return;
      }

      isLocked = true;

      $http.get('http://api.icndb.com/jokes/random')
        .success(function (response) {
          sound.play();

          if ($scope.current_joke) {
            $scope.previous_jokes.push($scope.current_joke);
          }

          if (response.type === "success") {
            $scope.current_joke = response.value.joke;
          }

          isLocked = false;
        })
        .error(function  () {
          isLocked = false;
        });
    }
  });
