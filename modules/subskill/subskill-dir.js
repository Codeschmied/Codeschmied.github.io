var subskillTemplate = `
<div class="col-xs-6">{{subskill.name}}</div>
<div class="col-xs-3" skillLevel="{{subskill.rating}}"><img class="skillImage{{subskill.rating}}" alt="{{subskill.rating}}"/>
<span class="skill1">+</span>
<span class="skill2">+ +</span>
<span class="skill3">+ + +</span>
</div>
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
