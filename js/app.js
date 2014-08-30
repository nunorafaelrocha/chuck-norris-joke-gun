// AnguarJS APP
var app = angular.module('cnjgApp', [])
  .controller('homeCtr', function ($scope, $http) {
    
    // the sound
    var sound = new Audio('sounds/High_Definition_Machine_gun.mp3');
    
    // the joke
    $scope.current_joke = "";
    
    // get new joke function
    $scope.getNewJoke = function () {
      
      sound.play();
      
      $http.get('http://api.icndb.com/jokes/random')
        .success(function (response) {
          
          if (response.type === "success") {
            $scope.current_joke = response.value.joke;            
          }
          
        });

    };
    
  });