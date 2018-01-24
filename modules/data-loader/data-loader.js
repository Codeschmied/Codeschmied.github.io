var mod =   angular.module('profile');

mod.controller('maLessionsCtrl',["$scope","lessions",  function($scope, lessions) {
    if(!$scope.lessions)
    {
      $scope.lessions = lessions;
    }
  }]);

mod.controller('maEmployersCtrl',["$scope","employers",  function($scope, employers) {
      if(!$scope.employers)
      {
        $scope.employers = employers;
      }
    }]);

mod.controller('maSkillsCtrl',["$scope","skillsets",  function($scope, skillsets) {
      if(!$scope.skills)
      {
        $scope.skillsets = skillsets;
      }
    }]);
