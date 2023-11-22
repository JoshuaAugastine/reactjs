import React from 'react';

class constructor1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:"www.Imarticus.org"
        } 
    }
   
    render(){
        return(
            <div >
                <p>Data : {this.state.fname}</p>
            </div>
        )
    }
}
export default constructor1;