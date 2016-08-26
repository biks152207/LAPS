'use strict';

describe('Component: JobNotesComponent', function () {

  // load the controller's module
  beforeEach(module('lapsApp'));

  var JobNotesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    JobNotesComponent = $componentController('JobNotesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
