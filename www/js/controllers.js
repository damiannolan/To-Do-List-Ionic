angular.module('toDoList.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout) {
    
    //using $rootScope allows the variable to be available to all the controllers
    //https://docs.angularjs.org/api/ng/service/$rootScope
    $rootScope.showAddItem = false;
    
    function enableAddItem() {
        $rootScope.showAddItem = true;
    }
    
    $scope.enableAddItem = enableAddItem;
})

.controller('ToDoCtrl', function($scope, $rootScope, myListStore) {
    
    $scope.data = myListStore.getToDo();
    
    var toDoItem = {
      title: "", info: ""  
    };
    
    function addToDo() {
        myListStore.addToDo(toDoItem);
        
        toDoItem.title = "";
        toDoItem.info = "";
        
        //Reset showAddItem to false to hide Item Input forms
        $rootScope.showAddItem = false;
    }
    
    function removeToDo(index) {
        myListStore.removeToDo(index);
    }
    
    $scope.toDoItem = toDoItem;
    $scope.addToDo = addToDo;
    $scope.removeToDo = removeToDo;
});
