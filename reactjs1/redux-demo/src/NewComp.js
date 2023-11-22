import React, { Component } from "react";
import { Connect, connect } from "react-redux";

class NewComp extends Component{
    styles={
    fontstyle: "italic",
    color: "purple"
    };

    render(){
        return(
            <div className="App">
                <h3 style={this.Styles}>{this.props.message}</h3>
                <button onClick={this.props.Buttonchange}>Subscribe</button>
            </div>
        )
    }
}

  const mapStateProps = state => {
    return{
        message: state.message
    };
  };

  const mapDispatchToProps = dispatch => {
    return{
        Buttonchange: () => dispatch({type: "message_change"})
    };
  };
export default connect(
    mapStateProps,
    mapDispatchToProps
)(NewComp);