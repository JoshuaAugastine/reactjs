

//Creating a functional component and add a state 
import React,{useState} from "react";
function Example2(){
    const [name,setname]= useState();
    function handleEvent(){
        setname = ("joshua");
        
    }

    return (
        <div> 
            <h1>Welcome to the Functional Component</h1>
            <h2>name = {name}</h2>
            <button onClick={handleEvent}> Increment</button>
        </div>
    )
}
export default Example2;

