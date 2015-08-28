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

.controller('View1Ctrl', ['$scope', 'TeamService', '_', function($scope,TeamService,_) {
    // $scope.items = ["A", "List", "Of", "Items"];
    $scope.teams = TeamService.query();

    var init = function() {
        _.keys($scope);
    }
    init();


    $scope.alerts = [
      { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function() {
      $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

}]);

