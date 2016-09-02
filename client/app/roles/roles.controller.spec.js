'use strict';

describe('Component: RolesComponent', function () {

  // load the controller's module
  beforeEach(module('lapsApp'));

  var RolesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    RolesComponent = $componentController('RolesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
