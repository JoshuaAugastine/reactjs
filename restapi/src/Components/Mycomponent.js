import { useContext } from "react";
import { MyContext } from "./Mycontext";

function MyComponent(){
    const {text,setText} = useContext(MyContext);
    return(
        <> 
        <h1> {text} </h1>
        <button onClick={() => setText('Hello, World')}> 
        Click me
        </button>
        </>
    );
}
export default MyComponent;