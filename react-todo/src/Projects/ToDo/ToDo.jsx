import './ToDo.css';
import { useState } from 'react';
import { TodoTask } from './TodoTask';
import { TodoForm } from './TodoForm';
import { TodoDateTime } from './TodoDateTime';
import { getLocalStorageTodoData , setLocalStorageTodoData } from './TodoLocalStorage';

export const Todo =()=> {

    const [task, setTask] = useState(() => getLocalStorageTodoData());                                  //! we changed task from string to object array. Previously : useState("");

    const handleFormSubmit =(inputValue) => {

        const {id , content , checked} = inputValue                                             //! since input value is now an object, we need to destructure it to get 'content'

        if(!content) return;                                                                    //! to check if input field is empty or not

        //if(task.includes(inputValue)) return;                                                 //! Cannot use this since input value is now an object and .includes() method doesn't exist
        const ifTodoContentMatched = task.find((currTask)=> currTask.content === content);
        if(ifTodoContentMatched) return;

        setTask((prevTask)=> [...prevTask, {id, content, checked}]);                            //! {id : id , content : content , checked : checked} previously, but acc. to ES6 property if same name for all key value pairs, we can just write one of them
    }

    //todo add data to local storage
    setLocalStorageTodoData(task);


    //todo delete task
    const handleDeleteTask =(value)=> {
        setTask(task.filter((currTask)=> currTask.content !== value));                          //! currTask -> currTask.content since 'value' i.e. inputValue is now an object thus currTask is as well
    }

    //todo check task
    const handleCheckTask =(value)=> {
        setTask(task.map((currTask)=> {
            if(currTask.content === value){
                return {...currTask, checked : !currTask.checked};
            }else{
                return currTask;
            }
        }))
    }

    //todo clear all
    const handleClearAll =() => {
        setTask([]);
    }

    return(
        <section className='todo-container'>
            <header>
                <h1>
                    ToDo List
                </h1>
                <TodoDateTime />
            </header>
                
                <TodoForm onFormSubmit={handleFormSubmit}/>
            <section className='myUnOrdList'>
                <ul>
                    {task.map((currTask) => ( 
                        <TodoTask 
                            key={currTask.id}                                                //! index changed to currTask.id
                            currTask={currTask.content} 
                            checked={currTask.checked} 
                            onDelete={handleDeleteTask}
                            onCheck={handleCheckTask}
                        /> 
                    ))}
                </ul>
            </section>
            <section>
                <button className='clear-btn' onClick={handleClearAll}>Clear All</button>
            </section>
        </section>
    )
}


