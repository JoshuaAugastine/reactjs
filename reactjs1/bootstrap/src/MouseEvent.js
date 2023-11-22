import React from "react";

class MouseEvent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message : "Mouse Event"
        }
    }

  handleEvent = (event) => {
    if(event.type === "mousedown"){
        this.setState({message : "Mouse Down"});
    }
    else if (event.type === "mousemove") {
        this.setState({message : "Mouse Move"});
    }
    else{
        this.setState({message : "Mouse Up"});
    }
  }  

  render(){
    return(
        <div>
            <div className="h4 bg-primary text-white text-center p-2">
                {this.state.message}
             </div>
                <div className="text-center">
                    <button className="btn btn-danger"
                    onMouseDown={this.handleEvent} onMouseUp={this.handleEvent} onMouseMove={this.handleEvent}>Change Image</button>
        </div>
        </div>
    )
  }
}

export default MouseEvent;