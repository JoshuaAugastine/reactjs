import React from "react";

class Snapshot extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor : "red"};
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor : "yellow"})
        },5000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
     document.getElementById("div1").innerHTML="before the update, the favorite was" + prevState.favoritecolor;

    }
    componentDidUpdate(){
     document.getElementById("div2").innerHTML ="the updated favorite is" + this.state.favoritecolor;
    }
    render(){
        return(
            <div>
                <h1>My Favorite Color Is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}

export default Snapshot;