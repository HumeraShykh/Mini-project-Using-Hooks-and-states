import {useState} from "react";
export default function Counter(){
    let [count, setCount] = useState(0);
    function inCount(){
        setCount(count+1);
       
    }
    function deCount(){
        setCount((curcount)=>{
            return curcount-1;
        });
        setCount((curcount)=>{
            return curcount-1;
        });
    }
    return(
        <>
        <h1>Count: {count} </h1>
        <button onClick={inCount}>Increment</button>
        <button onClick={deCount}>Decrement</button>
        </>
    );
}