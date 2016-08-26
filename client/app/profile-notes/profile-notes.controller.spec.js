'use strict';

describe('Component: ProfileNotesComponent', function () {

  // load the controller's module
  beforeEach(module('lapsApp'));

  var ProfileNotesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProfileNotesComponent = $componentController('ProfileNotesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
