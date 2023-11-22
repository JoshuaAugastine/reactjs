import { useState } from "react";

function Example5(){
    const[my,setMy]= useState( {
        test: "nil",
        questions : "0",
        students : "0"
    });
    function handleEvent(){  
          setMy ( {test : "programming quiz",
            questions : "30",
            students : "40" })

        }
    return(
        <div>
           <p>{my.test} {my.questions} {my.students}</p>
           <button onClick={handleEvent()} >UPDATE</button>
        </div>
    )
}
export default Example5;