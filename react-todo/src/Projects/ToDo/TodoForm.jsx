import { useState } from "react";

export const TodoForm =({onFormSubmit})=> {

    const [inputValue, setInputValue] = useState({});                       //! we change input value to an object by default
    
    const handleInputChange =(value) => {
        setInputValue({id : value , content : value , checked : false});    //! since we are validating that no 2 same values can be added, we can keep ID as value since its unique
    }                                                                       //! checked : false to initialize for strickthrough, mark task as done

    const handleFormSubmit =(event)=> {

        event.preventDefault();
        onFormSubmit(inputValue);
        setInputValue({id : "" , content : "" , checked : false});
    }

    return(
        <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className='todo-input' autoComplete='off' placeholder='Enter your ToDos' value={inputValue.content} onChange={(event)=> handleInputChange(event.target.value)} />
                    </div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </form>
            </section>
    );
}