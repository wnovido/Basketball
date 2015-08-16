'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {
  
  browser.get('index.html');

  it('should automatically redirect to /route1 when location hash/fragment is empty', function() {
    browser.wait(function() {
  return browser.executeScript('return !!window.angular');
}, 5000);
    expect(browser.getLocationAbsUrl()).toMatch("/route1");
    // expect(browser.driver.getCurrentUrl()).toMatch("/route1");
  });

/*

  describe('route1', function() {

    beforeEach(function() {
      browser.get('index.html#/route1');
    });


    it('should render route1 when user navigates to /route1', function() {
      expect(element.all(by.css('[ui-view] p')).first().getText()).
        toMatch(/This is route1/);
    });

  });


  describe('about', function() {

    beforeEach(function() {
      browser.get('index.html#/about');
    });


    it('should render about when user navigates to /about', function() {
      expect(element.all(by.css('[ui-view] p')).first().getText()).
        toMatch(/This is about/);
    });

  });
*/

});
