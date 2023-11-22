import { useRef, useEffect, useState } from "react";

function Reference(){
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() =>{
        count.current = count.current+1;
    } );

    return(
        <>
        <h1>useRef() example</h1>
        <input 
        type = "text"
        value = {inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
        <h1> Render Count : {count.current}</h1>
        </>
    )
}

export default Reference;