'use strict';

(function() {
function TeamController(TeamService, _, $loading, $timeout, $q, $alert) {
    var this_team = this;

    TeamService.query().$promise
    .then(function getTeam(response) {
            this_team.teams = response;
        })
    .catch(function errTeam(fallback) {
            console.log(fallback.toUpperCase())
        });

    var init = function() {
        _.keys(this_team);
    };

    init();

    /*   var $that = this;

     $scope.loading = new $loading({
     busyText: 'Loading proccess running...',
     theme: 'danger',
     timeout: false,
     delayHide: 1000
     });

     $scope.loadingButtonSucces = function () {
     return $timeout(function () {
     return true;
     }, 2000)
     };

     $scope.getError = function () {
     var deferred = $q.defer();

     setTimeout(function () {
     deferred.reject('Error');
     }, 1000);
     return deferred.promise;
     };

     $scope.displayAlert = function (title, message, theme) {
     $alert(message, title, theme)
     };
     */

}


angular.module('myApp.view1', ['ui.router'])

.config(function configTeam($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('route1', {
            url: "/route1",
            templateUrl: "view1/route1.html",
            controller: 'View1Ctrl as tc'
        })
          .state('route1.list', {
              url: "/list",
              templateUrl: "view1/route1.list.html",
              controller: 'View1Ctrl as tc'
          })
})          

.controller('View1Ctrl', ['TeamService', '_', '$loading', '$timeout', '$q', '$alert', TeamController]);


})();
