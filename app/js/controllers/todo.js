
/*================================================================
=>                  Controller = Todo
==================================================================*/
/*global app*/

app.controller('TodoCtrl', ['$scope', function ($scope) {

	'use strict';

	console.log('Controller ===  TodoCtrl');

  $scope.todos = [];

  $scope.addTodo = function() {
    if ($scope.todoText) {
      $scope.todos.push({
        text: $scope.todoText,
        done: false
      });
      $scope.todoText = '';
    }
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}]);


/*-----  End of Controller = Todo  ------*/



