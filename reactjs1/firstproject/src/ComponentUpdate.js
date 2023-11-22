import React from 'react';

class ComponentUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor : "red"};
    }
    shouldComponentUpdate(){
        return true;
    }
    changeColor = () =>{
        this.setState({favoritecolor : "blue"});  //setstate - update the value
    }
    render(){
        return(
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change Color</button>
                </div>
        )
    }
}

export default ComponentUpdate;