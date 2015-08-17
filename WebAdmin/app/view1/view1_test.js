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
      // Create sample Album using the Albums service
  /*      var sampleAlbum = new UserService ({
        name: 'New Album'
      });

      // Create a sample Albums array that includes the new Album
      var sampleAlbums = [sampleAlbum];

      // Set GET response
      $httpBackend.expectGET('albums').respond(sampleAlbums);

      // Run controller functionality
      scope.find();
      $httpBackend.flush();

      // Test scope value
      expect(scope.albums).toEqualData(sampleAlbums);*/

 


/*    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      // $httpBackend.expectGET('phones/phones.json').
          // respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
      scope = $rootScope.$new();
      ctrl = $controller('View1Ctrl', {$scope: scope});
    }));
*/

/*
    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl', { 
      	$scope: {} 
      });

      expect(view1Ctrl).toBeDefined();
    }));
*/
  
// });