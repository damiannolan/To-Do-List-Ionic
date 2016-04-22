angular.module('toDoList.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('ToDoCtrl', function($scope, myListStore) {
    
    $scope.data = myListStore.getToDo();
    
    var toDoItem = {
      title: "", info: ""  
    };
    
    function addToDo() {
        myListStore.addToDo(toDoItem);
        
        toDoItem.title = "";
        toDoItem.info = "";
    }
    
    function removeToDo(index) {
        myListStore.removeToDo(index);
    }
    
    $scope.toDoItem = toDoItem;
    $scope.addToDo = addToDo;
    $scope.removeToDo = removeToDo;
});
