'use strict';

angular.module('myApp.view2', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('route2', {
            url: "/route2",
            templateUrl: "view2/route2.html"
        })
          .state('route2.list', {
              url: "/list",
              templateUrl: "view2/route2.list.html",
              controller: 'View2Ctrl'
          })
})

.controller('View2Ctrl', ['$scope', function($scope) {
	$scope.things = ["A", "Set", "Of", "Things"];
}]);