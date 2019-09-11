var subskillTemplate = `<td>{{sub.name}}</td>
<td skillLevel="{{sub.rating}}">
  <img class="skillImage{{sub.rating}}" alt="{{sub.rating}}" style="display:none"/>
  <span ng-if="sub.rating==1">+</span>
  <span ng-if="sub.rating==2">++</span>
  <span ng-if="sub.rating==3">+++</span>
</td>
<td>{{sub.experience}}</td>
`;


angular.
  module('profile').
  directive('sub', function(){
    return {
    template: subskillTemplate,
    scope: {
      sub:'='
    }
  };
});
