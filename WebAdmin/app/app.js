'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngResource',
  'myApp.view1_services'
])

.config(function($stateProvider, $urlRouterProvider) {
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/route1")
})

;
