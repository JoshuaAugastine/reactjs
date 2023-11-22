import React, { useState } from 'react';

function Counter() {
    const [count, setCount ] = useState(0);

    function handleClick(){
        setCount(count + 1); 
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
 export default Counter;