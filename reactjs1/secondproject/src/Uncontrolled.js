import React, { Component } from 'react';

class Uncontrolled extends React.Component{
    constructor(props){
        super(props);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.input = React.createRef();
    }
    updateSubmit(event){
        alert('you have entered the username and companyname successfully.');
         event.preventDefault();
    }
    render(){
        return(
            <div classname = 'App'>
            <form onSubmit={this.updateSubmit}>
                <h1>Uncontrolled Form Example</h1>
                <label>Nmae: 
                    <input type="text" ref={this.input}/>
                </label>
                <label>
                    CompanyName :
                    <input type="text" ref={this.input}/>
                </label>
                     <input type="submit" value="submit"/>
            </form>
            </div>
        )
    }
}
export default Uncontrolled;