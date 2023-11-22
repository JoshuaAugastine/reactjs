import { useState, useEffect } from "react";

function Timer(){
    const [count, setCount] = useState(5);

    useEffect (() => {
         count>0 && setTimeout (() => setCount(count-1),1000);  },[count]);

   
    return<h1>Joshua Augastine  Account Balance  {count} M!</h1>;
}
export default Timer;