//Creating a functional component and add a state 
import React,{useState} from "react";
function Example3(){
    const [count,setCount]= useState(0);
    function handleEvent(){
        setCount(count+1);
    }

    function doubleEvent(){
        setCount(count+2);
    }
    return (
        <div> 
            <h1>Welcome to the Functional Component</h1>
            <h2>Imarticus Learning</h2>
            <h2>Count = {count}</h2>
            <h3>setCount= {count+1}</h3>
            <button onClick={handleEvent}> Single Count</button><br/><br/>
            <button onClick={doubleEvent}> double Count</button><br/><br/>
        </div>
    )
}
export default Example3;