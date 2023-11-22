export const Students = (props) => {

    console.log(props);
    return(
        <div className="Center">
            <p>firstname : {props.firstname} </p>
            <p>lastname : {props.lastname} </p>
            <p>email : {props.email} </p>
        </div>
    )
}