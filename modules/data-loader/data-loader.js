var mod =   angular.module('profile');

mod.controller('maLessionsCtrl',["$scope","lessions",  function($scope, lessions) {
    if(!$scope.lessions)
    {
      $scope.lessions = lessions;
    }
  }]);

mod.controller('maProjectsCtrl',["$scope","projects",  function($scope, projects) {
      if(!$scope.projects)
      {
        $scope.projects = projects;
      }
    }]);

mod.controller('maSkillsCtrl',["$scope","skillsets",  function($scope, skillsets) {
      if(!$scope.skills)
      {
        $scope.skillsets = skillsets;
      }
    }]);
