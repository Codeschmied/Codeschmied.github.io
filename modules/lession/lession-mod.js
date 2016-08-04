angular.
  module('profile').
  directive('lession', function(){return{
    template: '{{lession.year}}: {{lession.topic}}',
    scope: {
     lession: '='
   }
 }
 }
);
