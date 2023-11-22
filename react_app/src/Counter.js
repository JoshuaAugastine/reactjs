import { useEffect, useState } from "react";

function Counter(){
    const[count,setCount] = useState(0);
    const[cal,setCal] = useState(0);

    useEffect(() => {
        setCal(()=> count*5);
    },[count]); // add the count var here

    return(
        <>
        <p>Count : {count}</p>
        <button onClick={() => setCount((c) => c+1)}> + </button>
        <p>Calculation : {cal}</p>
        </>
    )
}

export default Counter;