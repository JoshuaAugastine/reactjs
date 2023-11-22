import React from 'react';

class Employee extends React.Component{

    state={
        firstname : "Ramesh",
        lastname : "fadatare",
        email : "ramesh@gmail.com"

    }
    updateEmployee(){
        this.setState({
            lastname : "jadhav",
            email : "ram@gmail.com"
        })
    }

    render(){
        return(
            <div className='App'>       
            <h1>Employee Details</h1><hr/>
            <p>{this.state.firstname}</p>
            <p>{this.state.lastname}</p>
            <p>{this.state.email}</p>
            <button onClick={ () => this.updateEmployee()}>Update Employee</button>
            </div>
        )
    }
}

export default Employee