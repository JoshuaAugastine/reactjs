import React, { Component } from 'react';

class MultipleInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            personGoing : true,
            numberOfPersons: 5
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
            <form>
                <h1>Multiple Input Controlled From Example</h1>
                <label>
                    Is person going :
                    <input name = "personGoing"
                    type ="checkbox"
                    checked={this.state.personGoing}
                    onChange={this.handleInputChange}/>
                </label><br/>
                <label>
                    Number of person :
                    <input name = "NumberOfPersons"
                    type ="number"
                    checked={this.state.numberOfPersons}
                    onChange={this.handleInputChange}/>
                </label><br/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default MultipleInput;