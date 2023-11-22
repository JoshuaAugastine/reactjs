import React from "react";

class ComponentUpdate1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor : "red"};
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor : "yellow"})
        },5000)
    }
    componentDidUpdate(){
        document.getElementById("mydiv").innerHTML="The Updated favorite is" + this.state.favoritecolor;
    }
    render(){
        return(
            <div>
                <h1>My Favourite Color Is {this.state.favoritecolor}</h1>
                <div id ="mydiv"></div>
                </div>
        )
    }
}

export default ComponentUpdate1;