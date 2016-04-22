angular.module('toDoList.services', [])

.factory('myListStore', function() {
   
    //Object to store array of items for ToDoList
    var data = {
        toDoList: [
            { title: "title", info: "info"},
            { title: "yo", info: "desc"}
        ]
    };
    
    //Function to get ToDo items from the factory
    function getToDo() {
        return data;
    }
    
    //Function to add an item to the array in the data object
    function addToDo(toDoItem) {
        data.toDoList.push({title: toDoItem.title, info: toDoItem.info});
    }
    
    //Factory returns
    return {
        getToDo: getToDo,
        addToDo: addToDo
    };
    
});