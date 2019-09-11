var projectTemplateTable = `
<tr ng-repeat-start="project in projectstable"></tr>
<tr class="starter">
<th style="word-wrap: break-word">{{project.PrimaryTitle}}</th>
<th ng-if="project.SecondaryTitle">{{project.SecondaryTitle}}</th>
</tr>
<tr>
  <td>Zeitraum</td>
  <td>{{project.TimeSpan}}</td>
</tr>
<tr>
  <td>Rolle</td>
  <td>{{project.Role}}</td>
</tr>
<tr>
  <td>Tätigkeit und Aufgaben</td>
  <td>{{project.Activity}}</td>
</tr>
<tr>
  <td>Technologien</td>
  <td>{{project.Technologies}}</td>
</tr>
<tr ng-if="project.Details">
  <td>Besonderheiten</td>
  <td>{{project.Details}}</td>
</tr>
<tr ng-repeat-end>
`;


angular.
  module('profile').
  directive('projectstable', function(){
    return {
    template: projectTemplateTable,
    scope: {
     projectstable: '='
   }
 };
 }
);
