import {useEffect} from 'react';
import useCounter from "./useCounter";

function Counter() {
    const [count,increment,decrement,reset]=useCounter()

    useEffect(()=>{
       console.log("Value of the count is",count);
    });

    return (
        <div className="container">
           <h1>{count}</h1>
            <button type="button" onClick={increment}>Increase</button>
            <button type="button" onClick={decrement}>Decrease</button>
            <button type="button" onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;