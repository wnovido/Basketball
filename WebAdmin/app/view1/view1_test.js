'use strict';

describe('myApp.view1 module', function() {
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('myApp.view1'));
  beforeEach(module('myApp.view1_services'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl', { 
      	$scope: {} 
      });

      expect(view1Ctrl).toBeDefined();
    }));

  });
});