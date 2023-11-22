import React , {Component} from 'react';

class Property extends Component{
      render(){
        return(
            <div>
                <h1>Default props Example</h1>
                <h3>Welcome to {this.props.name}</h3>
                <p>Imarticus learning is the one the best training acdemy</p>
            </div>
        )
      }
}

Property.defaultProps = {  // props - you can pass the data  - {this.props.name}
    name : "imarticus leraning"
}

export default Property;