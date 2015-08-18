describe('todoListController', function() {

  beforeEach(module('todoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('todoListController');
  }));

  it('When initialised, todo list is empty', function() {
    expect(ctrl.listTasks).toEqual([]);
  });

  describe('Adding tasks: ', function(){

    it('Can add 1 task which defaults to not done', function(){
      ctrl.items = "Make todo list"
      ctrl.addItem();
      expect(ctrl.listTasks).toEqual([{'name': 'Make todo list', 'taskDone': false}]);
    });

    it('List displays multiple tasks', function(){
      ctrl.items = "Make todo list"
      ctrl.addItem();
      ctrl.items = "Add an item to to-do list"
      ctrl.addItem();
      expect(ctrl.listTasks).toEqual([{name: 'Make todo list', 'taskDone': false},{ 'name': 'Add an item to to-do list', 'taskDone': false} ])
    });
  });

  describe('Marking tasks as done: ', function(){

    it('can mark items as done', function(){
      ctrl.items = "Make a todo list"
      ctrl.addItem();
      ctrl.markDone(ctrl.listTasks[0]);
      expect(ctrl.listTasks[0].taskDone).toEqual(true)
    });
  });
});