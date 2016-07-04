describe('PieController', function() {
  beforeEach(module('testApp'));
  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.pies', function(){
    it ('sets up an empty array for $scope.pies', function () {
      var $scope = {};
      var controller = $controller('PieController', {$scope: $scope});
      expect($scope.pies.length).toEqual(0);
    });
  });
  describe('$scope.addPies', function() {
    it('adds a pie to $scope.pies', function(){

    });
  });
});
