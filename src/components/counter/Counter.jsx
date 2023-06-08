import { useState } from "react";
import Button from "../button/Button";

const Counter = () =>{
    const [counter, setCounter] = useState(0);

    return(
    <>
        <h1>{counter}</h1>
        {/* <button onClick={()=>increment(counter,setCounter)}>+1</button>
        <button onClick={()=>decrement(counter,setCounter)}>-1</button>
        <button onClick={()=>reset(setCounter)}>Reset</button> */}
        <Button text='+1' action={()=>increment(counter,setCounter)}/>
        <Button text='-1' action={()=>decrement(counter,setCounter)}/>
        <Button text='Reset' action={()=>reset(setCounter)}/>
    
    </>
    );
}

const increment = (counter, setCounter) => {

    setCounter(counter +1);

};

const decrement = (counter, setCounter) => {

    setCounter(counter -1);

};

const reset = (setCounter) => {

    setCounter(0);

};

export default Counter;