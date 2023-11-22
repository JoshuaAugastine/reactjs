import React, { useState } from "react";

const Checkboxlist = ({ checkboxes }) => {
    const [checkedState, setCheckedState] = useState(
        new Array(checkboxes.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    return(
        <div>
            {checkboxes.map((item, index) => (
                <div key ={index}>
                    <label>
                        <input 
                        type="checkbox"
                        checked={checkedState[index]}
                        onChange={()=> handleOnChange(index)} />
                        {item}
                    </label>
                    </div>
            ))}
        </div>
    )
}

export default Checkboxlist;