import React from 'react';

function Listfn(props){
    const myList=props.myList;
    const listItems= myList.map((myList) =>{
        return <li>{myList}</li>;
    });

return(
    <div>
        <h2>Rendering lists using props</h2>
                <ul>{listItems}</ul>
            </div>
)
} 

export default Listfn;
