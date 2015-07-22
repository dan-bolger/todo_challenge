describe('MyTodoListController', function() {
  beforeEach(module('MyTodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MyTodoListController');
  }));
});