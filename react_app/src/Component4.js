import Component5 from "./Component5";

function Component4({user}){
    return(
        <>
        <h4>Component 4</h4>
        <Component5 user={user} />
        </>
    )
}

export default Component4;