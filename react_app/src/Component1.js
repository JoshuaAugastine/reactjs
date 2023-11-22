import{ useState } from "react";
import Component2 from "./Component2";

function Component1(){
    const[user, setUser] = useState("jessy Land");

    return(
        <>
        <h2>{`hello ${user}!`}</h2>
        <Component2 user={user} />
        </>
    )
}

export default Component1;