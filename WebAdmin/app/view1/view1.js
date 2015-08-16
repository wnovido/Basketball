'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('route1', {
            url: "/route1",
            templateUrl: "view1/route1.html"
        })
          .state('route1.list', {
              url: "/list",
              templateUrl: "view1/route1.list.html",
              controller: 'View1Ctrl'
          })
})          

// .controller('View1Ctrl', ['$scope', 'UserService', '_', function($scope,UserService,_) {
    // $scope.items = ["A", "List", "Of", "Items"];
    // $scope.users = UserService.query();

    // var init = function() {
        // _.keys($scope);
    // }
    // init();

// }]);

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.users = ["A", "List", "Of", "Items"];
}]);

