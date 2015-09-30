'use strict';

// describe('myApp.view1 module', function() {


  describe('View1Ctrl Tests', function() {
    // Initialize global variables
    var View1Ctrl,
        scope,
        $httpBackend,
        $stateParams,
        $location;

    // The $resource service augments the response object with methods for updating and deleting the resource.
    // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
    // the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
    // When the toEqualData matcher compares two objects, it takes only object properties into
    // account and ignores methods.
    beforeEach(function() {
      jasmine.addMatchers({
        toEqualData: function(util, customEqualityTesters) {
          return {
            compare: function(actual, expected) {
              return {
                pass: angular.equals(actual, expected)
              };
            }
          };
        }
      });
    });

    beforeEach(module('myApp.view1'));
    beforeEach(module('myApp.view1_services'));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
      // Set a new global scope
      scope = $rootScope.$new();

      // Point global variables to injected services
      $stateParams = _$stateParams_;
      $httpBackend = _$httpBackend_;
      $location = _$location_;

      // Initialize the Albums controller.
      View1Ctrl = $controller('View1Ctrl', {
        $scope: scope
      });
    }));

    module(function($provide) {
      $provide.service('TeamService', myServiceName);
    });

    inject(function($injector) {
      var TeamService;
      TeamService = $injector.get('TeamService');
      it('Sample Injection of TeamService', inject(function(TeamService) {
      }));
    });

  
  });
