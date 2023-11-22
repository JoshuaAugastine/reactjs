import { useState, useEffect } from "react";

function Timer1(){
    const [count, setCount] = useState(1);

    useEffect (() => {
         count<5 && setTimeout (() => setCount(count+1),1000);  },[count]);

   
    return<h1>Joshua Augastine  Account Balance  {count} M!</h1>;
}
export default Timer1;