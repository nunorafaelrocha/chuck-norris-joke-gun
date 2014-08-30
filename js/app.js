// AnguarJS APP
var app = angular.module('cnjgApp', [])
  .controller('homeCtr', function ($scope, $http) {
    $scope.current_joke = "aol";
    
    // get new joke function
    $scope.getNewJoke = function () {
      
      $http.get('http://api.icndb.com/jokes/random')
        .success(function (response) {
          
          if (response.type === "success") {
            console.log(response.value.name);
            $scope.current_joke = response.value.name;
            
          }
          
        });

    };
    
  });