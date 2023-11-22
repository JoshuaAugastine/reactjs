import React from 'react';
import '../App.css';

class Greeting extends React.Component{
    state = {   // state is holding the data in jsx
        name:"joshua augastine",
        id:2004,
        contact:7339418376
    }
     render(){
        return(
            <div className='App-header'>
                <h1>{this.state.name}</h1> 
                <h2>{this.state.id}</h2> 
                <h3>{this.state.contact}</h3>   
            </div>
        )  //this using to display the data
     }
} 

export default Greeting;