'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; //Underscore must already be loaded on the page
});

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngResource',
  'myApp.view1_services',
  'underscore',
  'ngSanitize',
  'ngAnimate',
  'ngQuantum'
])

.config(function($stateProvider, $urlRouterProvider) {
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/route1")
})

;


