angular.module('toDoList.services', [])

.factory('myListStore', function() {
   
    //Object to store array of items for ToDoList
    var data = {
        toDoList: [
//            { title: "TestTitle", info: "Test description"},
        ]
    };
    
    //Function to get ToDo items from the factory
    function getToDo() {
        return data;
    }
    
    //Function to add an item to the array in the data object
    function addToDo(toDoItem) {
        
        //There must be at least a title to add to the list
        if(toDoItem.title != "")
        {
            data.toDoList.push({title: toDoItem.title, info: toDoItem.info});
        }        
    }
    
    //Functoin to remove an item from the array in the data object
    function removeToDo(index) {
        data.toDoList.splice(index, 1);
    }
    
    //Factory returns
    return {
        getToDo: getToDo,
        addToDo: addToDo,
        removeToDo: removeToDo
    };
    
});