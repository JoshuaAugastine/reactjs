export const Student1 = (props) => {

    console.log(props);
    return(
        <div className="center">
            <p>first name : {props.Stud.firstname}</p>
            <p>last name : {props.Stud.lastname}</p>
            <p>email address: {props.Stud.email}</p>
        </div> //props - get a input from outside 
        // state - get a input from class 
    )
}