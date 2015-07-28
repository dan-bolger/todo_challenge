todoList.controller('todoListController', [function(){
  var self = this;
  self.listTasks = [];

  self.addItem = function(){
    self.listTasks.push(self.items);
  };

}]);