import React from "react";
class NewComp extends React.Component{

constructor(props) {
    super(props);

    this.state = {
        message: "imarticus leraning"
    };
}

  styles ={
    fontStyle: "italic",
    color :"purple"
  };
  Buttonchange = () =>{
    this.setState({
    message: "Thank you for subscribing"
    })
  }
render(){
    return(
        <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>  
        <button onClick={this.Buttonchange}>Subscribe</button>  
        </div>
    )
}

}

export default NewComp;