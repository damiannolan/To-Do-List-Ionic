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
    
    $scope.toDoItem = toDoItem;
    $scope.addToDo = addToDo;
});
