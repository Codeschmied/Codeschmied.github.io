var subskillTemplate = `
<div class="col-xs-6">{{subskill.name}}</div>
<div class="col-xs-3"><img class="skillImage{{subskill.rating}}"/></div>
<div class="col-xs-3 ">{{subskill.experience}}</div>`;


angular.
  module('profile').
  directive('subskill', function(){
    return {
    template: subskillTemplate,
    scope: {
      subskill:'='
    }
  };
});
