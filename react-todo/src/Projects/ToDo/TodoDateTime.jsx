import { useState,useEffect } from "react";

export const TodoDateTime =()=> {
    
    const [dateTime, setDateTime] = useState("");

    //todo date time
    useEffect(()=> {                                                     //The useEffect hook runs when the component mounts
        const interval = setInterval(()=> {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        
         setDateTime(`${formattedDate} - ${formattedTime}`);
        
        },1000);                                                          //Refreshes every interval of 1000 ms i.e. 1 second
    
        return () => clearInterval(interval);                             //Returns a cleanup function that clears the interval when the component unmounts, which prevents memory leaks.
    } , []);                                                              //Empty dependency array in useEffect means it only runs once

    return(
        <h2 className='date-time'>{dateTime}</h2>
    )
}