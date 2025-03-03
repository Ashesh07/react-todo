import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoTask =({currTask, checked , onDelete , onCheck})=> {

    return(
        <li className='todo-item'>
            <span className={checked ? "checkList" : "notCheckList"}>{currTask}</span>
            <button className='check-btn' onClick={()=> onCheck(currTask)}>
                <FaCheckCircle />
            </button>
            <button className='delete-btn' onClick={()=>onDelete(currTask)}>
                <MdDeleteForever/>
            </button>
        </li>
    );
}