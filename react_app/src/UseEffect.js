import { useEffect, useState } from "react"

function UseEffect(){
    const[count,setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count+1);},1000)
    })

    return(
        <>
        <h1>UseEffect Example</h1>
        <h2>I have Rendered {count} times</h2>
        </>
    )
}

export default UseEffect;