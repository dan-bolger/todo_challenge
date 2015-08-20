todoList.controller('todoListController', [function(){
  var self = this;
  self.listTasks = [];


  self.addItem = function(){
    self.listTasks.push({'task': self.items, 'taskDone': false});
  };

  self.markDone = function(item){
    item.taskDone = true;
  };

  self.changeItem = function(item){
    item.task = 'Make a todo list using Angular';
  };

}]);