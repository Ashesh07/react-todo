const todoKey = "reactTodo";

export const getLocalStorageTodoData =() =>{                                                    //! we changed task from string to object array. Previously : useState("");
        const rawTodos = localStorage.getItem(todoKey);                                         //! getting raw todo data from local storage as initial data if available 
        if(!rawTodos) return [];                                                                //! if not available , initial data is empty object array
        return JSON.parse(rawTodos);
}

export const setLocalStorageTodoData =(task) =>{
    localStorage.setItem(todoKey , JSON.stringify(task));                                       //! JSON.stringify converts array or object into JSON String
}