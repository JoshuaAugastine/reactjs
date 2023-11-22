
import React from "react";

class Example4 extends React.Component{
    state={
        name : "nikil",
        age:23
    }
    handleEvent=() =>{
        this.setState({name:'fire',age:22});
    }

    render(){
        return(
            <div>
                <h1>welcome to class component</h1>
                <h2>name = {this.state.name}</h2>
                <h2>age = {this.state.age}</h2>
               < button onClick={this.handleEvent}>Click to Change</button>
            </div>
        )
    }
}