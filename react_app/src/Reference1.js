import { useEffect, useState } from "react";

export default function Reference1(){
    //create a ref
    const [counter, setCounter] = useState(0);

    //inc the counter by one
    const handleIncreaseCounter = () =>{
        setCounter(counter+ 1);
    }

    useEffect(() => {
        console.log("counter changed to :" , counter);
    },[counter]);

    return (
        <div>
            <h1>learn about useRef!</h1>
            <h2>value : {counter}</h2>
            <button onClick={handleIncreaseCounter}>Inc Counter</button>
            </div>
    )
}