import React from 'react';

class Header extends React.Component(){
    constructor(props){
        super(props);
        this.state = {favoritecolor : "red"};
    }
    render(){
        return(
            <h1>My favorite Color Is {this.props.favoritecolor}</h1>
        );
    }
}

export default Header;