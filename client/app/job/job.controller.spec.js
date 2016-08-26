'use strict';

describe('Component: JobComponent', function () {

  // load the controller's module
  beforeEach(module('lapsApp'));

  var JobComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    JobComponent = $componentController('JobComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
