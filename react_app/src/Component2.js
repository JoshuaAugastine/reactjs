import Component3 from "./Component3";
function Component2({user}){
    return(
        <>
        <h2>Component 2</h2>
        <Component3 user={user} />
        </>
    )
}

export default Component2;