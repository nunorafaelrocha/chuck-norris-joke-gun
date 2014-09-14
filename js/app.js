// AngularJS APP
var app = angular.module('cnjgApp', [])
  .controller('homeCtr', function ($scope, $http) {

    // the sound
    var sound = new Audio('sounds/High_Definition_Machine_gun.mp3');

    // the joke
    $scope.current_joke = "";
    // previous jokes
    $scope.previous_jokes = [];

    // get new joke function
    var is_getnewjoke_locked = false;
    $scope.getNewJoke = function () {
        if (!is_getnewjoke_locked) {
            is_getnewjoke_locked = true;

             sound.play();

             $http.get('http://api.icndb.com/jokes/random')
                .success(function (response) {
                    if ($scope.current_joke) {
                        $scope.previous_jokes.push($scope.current_joke);
                    };
                    if (response.type === "success") {
                        $scope.current_joke = response.value.joke;
                    }
                    is_getnewjoke_locked = false;
               })
                .error(function  () {
                    is_getnewjoke_locked = false;
                });
        };
    };
  });
