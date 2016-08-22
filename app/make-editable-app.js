/*global angular $*/
angular.module('editApp', ['ngAnimate'])
  .directive('makeEditable', () => {
    return {
      restrict: 'A',
      templateUrl: 'make-editable-template.html',
      transclude: true,
      replace: true,
      scope: true,
      link : (scope, element, attrs) => {
        var text = $(element).find('.editable-region');

        scope.editable = false;
        scope.toggleEditability = () => {
          scope.editable = !scope.editable
          if (scope.editable) {
            text.attr('contenteditable','');
          } else {
            text.removeAttr('contenteditable');
          }
          return;
        }
      }
    }  
  });
