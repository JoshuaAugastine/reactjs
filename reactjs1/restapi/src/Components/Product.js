import { useContext } from "react";
import { MyContext } from "./Mycontext";

function Product(){
    const {text,setText} = useContext(MyContext);
    return(
        <> 
        <h1> {text} </h1>
        <button onClick={() => setText('Product Details')}> 
        Click 
        </button>
        </>
    );
}
export default Product;