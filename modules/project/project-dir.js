var projectTemplate = `<div class="row">
<h4 class="col-xs-12 col-sm-2 visible-xs" style="word-wrap: break-word">{{project.PrimaryTitle}}</h4>
<h3 class="col-xs-12 col-sm-2  hidden-xs" style="word-wrap: break-word">{{project.PrimaryTitle}}</h3>
<h4 ng-if="project.SecondaryTitle" class="col-xs-12 col-sm-10 visible-xs">{{project.SecondaryTitle}}</h4>
<h3 ng-if="project.SecondaryTitle" class="col-xs-12 col-sm-10  hidden-xs">{{project.SecondaryTitle}}</h4>
</div>
<div class="row">
  <div class="col-xs-3 col-sm-2">Zeitraum</div>
  <div class="col-xs-9 col-sm-10">{{project.TimeSpan}}</div>
</div>
<div class="row">
  <div class="col-xs-3 col-sm-2">Rolle</div>
  <div class="col-xs-9 col-sm-10">{{project.Role}}</div>
</div>
<div class="row">
  <div class="col-sm-2 hidden-xs">Tätigkeit und Aufgaben</div>
  <h5 class="col-xs-12 visible-xs">Tätigkeit und Aufgaben:</h5>
  <div class="col-xs-9 col-sm-10">{{project.Activity}}</div>
</div>
<div class="row">
<div class="col-sm-2 hidden-xs">Technologien</div>
<h5 class="col-xs-12 visible-xs">Technologien:</h5>
  <div class="col-xs-12 col-sm-10">{{project.Technologies}}</div>
</div>
<div class="row" ng-if="project.Details">
<div class="col-sm-2 hidden-xs">Besonderheiten</div>
<h5 class="col-xs-12 visible-xs">Besonderheiten:</h5>
  <div class="col-xs-12 col-sm-10">{{project.Details}}</div>


</div><div class="visible-xs"><br/><br/></div>`;


angular.
  module('profile').
  directive('project', function(){
    return {
    template: projectTemplate,
    scope: {
     project: '='
   }
 };
 }
);
