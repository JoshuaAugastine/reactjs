const Checklist = ({ checkboxes, checkedState, handleCheckboxChange }) => {

    return(
        <div>
            {checkboxes.map ((item, index) => 
            <div key={index}>
                <label>
                    <input
                    type = "checkbox"
                    checked = {checkedState[index]}
                    onChange={() => handleCheckboxChange(index)} />
                    {item}
                </label>
                </div>
            )}
        </div>
    )
}

export default Checklist;