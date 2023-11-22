import { memo } from "react";

const todoz = ({ todos, addtodo }) => {
     console.log("child render");
     return(
        <>
        <h2>My Todos</h2>
        {todoz.map((todo, index) =>{
        return <p key={index}>{todo}</p>;
        })}
        <button onClick={addtodo}>Add Todo </button>
        </>
     );
};

export default memo(todoz);
