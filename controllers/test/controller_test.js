describe('TestControllers', function(){
  beforeEach(module('testApp'));
  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.name', function() {
    it('sets the name to \'I am a test string\'', function(){
      var $scope = {};
      var controller = $controller('TestController', {$scope: $scope});
      expect($scope.name).toEqual('I am a test string');
    });
  });
});
