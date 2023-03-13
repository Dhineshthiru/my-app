import React, { useState } from "react";
function StateFunc(){

    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    };
    const decrement = ()=>{
        setCount(count-1);
    };

    return(
        <div> 
        <h1>Welcome</h1>
        <h2>The count is:{count}</h2>
        <button onClick = {decrement}>-</button>
        <button onClick = {increment}>+</button>
        </div>)
}

export default StateFunc;