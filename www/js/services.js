angular.module('toDoList.services', [])

// The localStorage factory below has been taken from an app my brother created a couple of months ago
// He added me to the repository on bitbucket however I belive it is private
// Link - https://bitbucket.org/foodphoto/foodphoto-hybrid
// I done some reading about it and then implemented the functions in my own factory below - 'myListStore'

.factory('localStorage', function($window) {
	
    //returns the value for key or else defaultValue
    function get(key, defaultValue) {
		return $window.localStorage[key] || defaultValue;
	}
    
    //Set a value for a specific key
	function set(key, value) {
		$window.localStorage[key] = value;
	}
    
    //returns the object stored at the key, JSON.parse() method parses a string as JSON
	function getObject(key) {
		return JSON.parse($window.localStorage[key] || null);
	}
    
    //JSON.stringify parses the value as a JSON string and stores it at the key given
	function setObject(key, value) {
		$window.localStorage[key] = JSON.stringify(value);
	}
    
    //Removes the specified key and values
	function removeItem(key) {
		$window.localStorage.removeItem(key);
	}

	return {
		get: get,
		set: set,
		getObject: getObject,
		setObject: setObject,
		removeItem: removeItem
	};
})

.factory('myListStore', function(localStorage) {
   
    //Object to store array of items for ToDoList
    var data = {
        toDoList: [      
            //{ title: "TestTitle", info: "Test description"},
        ]
    };
  
    //Function to get ToDo items from the factory
    function getToDo() {
        
        //Attempt to get localStroage data
        data.toDoList = localStorage.getObject('data') || [];
        
        return data;
    }
    
    //Function to add an item to the array in the data object
    function addToDo(toDoItem) {
        
        //There must be at least a title to add to the list
        if(toDoItem.title != "")
        {
            data.toDoList.push({title: toDoItem.title, info: toDoItem.info});
            
            //Update the localStorage object
            localStorage.setObject('data', data.toDoList);
        }
        
    }
    
    //Function to remove an item from the array in the data object
    function removeToDo(index) {
        data.toDoList.splice(index, 1);
        
        //Set the new object in localStorage to the new toDoList (with item spliced from array)
        localStorage.setObject('data', data.toDoList);
    }
    
    //Factory returns
    return {
        getToDo: getToDo,
        addToDo: addToDo,
        removeToDo: removeToDo
    };
    
});