describe('todoListController', function() {

  beforeEach(module('todoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('todoListController');
  }));

  it('When initialised, todo list is empty', function() {
    expect(ctrl.listTasks).toEqual([]);
  });

  describe('Adding items', function(){

    it('List displays 1 item', function(){
      ctrl.items = "Make todo list"
      ctrl.addItem();
      expect(ctrl.listTasks).toEqual(["Make todo list"]);
    });

    it('List displays multiple items', function(){
      ctrl.items = "Make todo list"
      ctrl.addItem();
      ctrl.items = "Add an item to to-do list"
      ctrl.addItem();
      expect(ctrl.listTasks).toEqual(["Make todo list", "Add an item to to-do list"]);
    });
  });

});