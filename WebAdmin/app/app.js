'use strict';

// Do this to underscore to be injected as dependency which would allow underscore to be swapped out at test time
// From this article https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make#3-dependency-injection
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
  'ngQuantum',
  'ui.bootstrap',
  'myApp.login',
  'myApp.signup'
])

.run(['$templateCache', '$cacheFactory', '$rootScope',
  function ($templateCache, $cacheFactory, $rootScope) {
    $templateCache = false;
  }])
.config(function($stateProvider, $urlRouterProvider) {
      // For any unmatched url, send to /login
      $urlRouterProvider.otherwise("/login")
})
;


