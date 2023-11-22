import { useEffect, useRef } from "react";
export function Ref_check(){
    //create a ref
    const divElement = useRef();
   //trigger on the first render of the component
   useEffect(() => {
    //get the height of the div element
    console.log("the height of the div is: ", divElement.current.offsetHeight)
   },[]);

 return(
    <div ref={divElement}>
        <br/><br/><br/>
        <h1>Learn about useRef!</h1>
    </div>
 )
}