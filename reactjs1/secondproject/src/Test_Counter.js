

import React from 'react';

class Test_Counter extends React.Component{
    state = {
        count:0

    };
    handleClick = () =>{
        this.setState({ count: this.state.count + 1});
    };

    render(){
        return(
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}
export default Test_Counter;