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

    it('List displays 1 task', function(){
      ctrl.items = "Make todo list"
      ctrl.addItem();
      expect(ctrl.listTasks).toEqual[ Object({ name: 'Make todo list', taskdone: false }) ]
    });

    it('List displays multiple tasks', function(){
      ctrl.items = "Make todo list"
      ctrl.addItem();
      ctrl.items = "Add an item to to-do list"
      ctrl.addItem();
      expect(ctrl.listTasks).toEqual[ Object({ name: 'Make todo list'},{ name: 'Add an item to to-do list'}) ]
    });
  });

  describe('Marking tasks as done: ', function(){

    it('is automatically not done when created', function(){
      ctrl.items = "Make a todo list"
      ctrl.addItem();
      expect(ctrl.listTasks).toEqual[Object({taskdone: false})]
    });
  });
});